import express from "express";
import { StatusCodes } from "http-status-codes";
import { sendConfirmationEmail } from "../libs/mailer";
import Users from "../models/UserModel";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import * as CustomError from "../errors";

type IUserList = {
  _id: string;
  email: string;
  username: string;
  wallets: string[];
  verified: boolean;
  save: () => void;
}[];

type IUser = {
  _id: string;
  email: string;
  username: string;
  wallets: string[];
  verified: boolean;
  save: () => void;
};
// create user
export const createUser = async (
  req: express.Request,
  res: express.Response
) => {
  // tslint:disable-next-line:no-console
  // console.log(req.body);
  // try {
  const usernameAlreadyExists = await Users.findOne({
    username: req.body.username,
  });

  if (usernameAlreadyExists) {
    throw new CustomError.BadRequestError("Username already exists");
  }

  const emailAlreadyExists = await Users.findOne({ email: req.body.email });
  if (emailAlreadyExists) {
    throw new CustomError.BadRequestError("Email already exists");
  }

  // create user
  const user: IUser | any = await Users.create({
    email: req.body.email,
    username: req.body.username,
    password: await bcrypt.hash(req.body.password, 10),
    wallets: req.body.wallets,
  });

  // email info
  const data = {
    id: user._id,
    email: user.email,
    username: user.username,
    wallets: user.wallets,
    verified: user.verified,
    challenges: user.challenges,
  };

  // send email
  await sendConfirmationEmail({ toUser: data, hash: data.id });
  const myUser = {
    id: user._id,
    email: user.email,
    username: user.username,
    wallets: user.wallets,
  };

  // generate tokens
  const accessToken = jwt.sign(
    { ...myUser },
    `${process.env.ACCESS_TOKEN_SECRET}`,
    { expiresIn: "24h" }
  );
  // return response
  res.status(StatusCodes.OK).json({ accessToken, ...user });
  // } catch (error) {
  //   // Log error
  //   // console.error("Error creating user:", error);

  //   // Determine error type and send appropriate response
  //   if (error.name === "ValidationError") {
  //     // res
  //     //   .status(StatusCodes.BAD_REQUEST)
  //     //   .send({ message: "Validation error", details: error.errors });
  //     throw new CustomError.BadRequestError("Validation error");
  //   } else if (error.name === "MongoError" && error.code === 11000) {
  //     // res
  //     //   .status(StatusCodes.CONFLICT)
  //     //   .send({ message: "Duplicate key error", details: error.keyValue });
  //     throw new CustomError.BadRequestError("Duplicate key error");
  //   } else {
  //     // res
  //     //   .status(StatusCodes.INTERNAL_SERVER_ERROR)
  //     //   .send({ message: "Internal server error", details: error.message });

  //     throw new CustomError.BadRequestError("Internal server error");
  //   }
  // }
};

// login user
export const loginUser = async (
  req: express.Request,
  res: express.Response
) => {
  // authenticate user
  // try {
  // get user

  const user: IUserList | any = await Users.findOne({
    $or: [{ username: req.body.username }, { email: req.body.username }],
  });

  if (user) {
    // compare password
    if (await bcrypt.compare(req.body.password, user.password)) {
      const myUser = {
        id: user._id,
        email: user.email,
        username: user.username,
        wallets: user.wallets,
      };
      // generate tokens
      const accessToken = jwt.sign(
        { ...myUser },
        `${process.env.ACCESS_TOKEN_SECRET}`,
        { expiresIn: "24h" }
      );
      res.status(StatusCodes.OK).json({ accessToken, ...user });
    } else {
      // res
      //   .status(StatusCodes.UNAUTHORIZED)
      //   .json({ msg: "Invalid credentials" });
      throw new CustomError.UnauthenticatedError("Invalid Credentials");
    }
  } else {
    // res.status(StatusCodes.UNAUTHORIZED).json({ msg: "Invalid credentials" });
    throw new CustomError.UnauthenticatedError("Invalid Credentials");
  }
  // } catch (error) {
  //   // Send an internal server error response
  //   // return res
  //   //   .status(StatusCodes.INTERNAL_SERVER_ERROR)
  //   //   .json({ msg: "Internal server error", details: error.message });
  //   throw new CustomError.BadRequestError("Internal server error");
  // }
};

// check address user
export const checkAddress = async (
  req: express.Request,
  res: express.Response
) => {
  // authenticate user

  try {
    const { address } = req.params;

    // get user
    const user: IUserList | any = await Users.find({
      wallets: { $elemMatch: { $eq: address } },
    });

    if (user.length > 0) {
      // return true
      res.status(StatusCodes.OK).json({ msg: true });
    } else {
      // return false
      res.status(StatusCodes.OK).json({ msg: false });
    }
  } catch (error) {
    // console.log(error)
    // throw error
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error);
  }
};
