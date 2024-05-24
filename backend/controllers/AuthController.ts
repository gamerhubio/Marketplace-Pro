import express from "express";
import { StatusCodes } from "http-status-codes";
import { sendConfirmationEmail } from "../libs/mailer";
import Users from "../models/UserModel";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

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
  try {
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
    res.status(StatusCodes.OK).json({ accessToken });
  } catch (error) {
    // throw error
    res.status(StatusCodes.BAD_REQUEST).send(error);
  }
};

// login user
export const loginUser = async (
  req: express.Request,
  res: express.Response
) => {
  // authenticate user
  try {
    // get user
    const user: IUserList | any = await Users.findOne({
      username: req.body.username,
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
        res.status(StatusCodes.OK).json({ accessToken });
      } else {
        res
          .status(StatusCodes.UNAUTHORIZED)
          .json({ msg: "Invalid credentials" });
      }
    } else {
      res.status(StatusCodes.UNAUTHORIZED).json({ msg: "Invalid credentials" });
    }
  } catch (error) {
    // console.log(erro
    // throw error
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error);
  }
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
