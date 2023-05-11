import express from "express";
import { StatusCodes } from "http-status-codes";
import { sendConfirmationEmail } from "../libs/mailer";
import Users from "../models/UserModel";
import jwt from "jsonwebtoken";

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
  try {
    // create user
    const user: IUser | any = await Users.create({ ...req.body });

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
    };
    // tslint:disable-next-line:no-console
    // console.log(myUser)

    // generate tokens
    const accessToken = jwt.sign(
      { ...myUser },
      `${process.env.ACCESS_TOKEN_SECRET}`,
      { expiresIn: "24h" }
    );
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
    const { address } = req.body;

    // get user
    const user: IUserList | any = await Users.find({
      wallets: { $elemMatch: { $eq: address } },
    });

    if (user.length > 0) {
      if (!user[0].email || !user[0].username) {
        // return user object for account creation
        res.status(StatusCodes.OK).json({
          user,
        });
      } else {
        const myUser = {
          id: user[0]._id,
          email: user[0].email,
          username: user[0].username,
        };
        // tslint:disable-next-line:no-console
        // console.log(myUser)

        // generate tokens
        const accessToken = jwt.sign(
          { ...myUser },
          `${process.env.ACCESS_TOKEN_SECRET}`,
          { expiresIn: "24h" }
        );
        res.status(StatusCodes.OK).json({ accessToken });
      }
    } else {
      // return user object for account creation
      res.status(StatusCodes.OK).json({
        user,
      });
    }
  } catch (error) {
    // console.log(error)
    // throw error
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error);
  }
};
