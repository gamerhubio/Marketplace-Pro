import express from "express";
import { StatusCodes } from "http-status-codes";
import Subscriptions from "../models/SubscriptionModel";
import Users from "../models/UserModel";
import * as CustomError from "../errors";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { sendPasswordEmail } from "../libs/mailer";

type IUser = {
  _id: string;
  email: string;
  username: string;
  wallets: string[];
  verified: boolean;
  save: () => void;
}[];

export const requestLink = async (
  req: express.Request,
  res: express.Response
) => {
  const { email } = req.body;
  const user: IUser | any = await Users.findOne({
    email,
  });

  if (user) {
    const secret = process.env.ACCESS_TOKEN_SECRET + user.password;
    const payload = {
      email,
      id: user._id,
    };
    //create one time link valid for 15 minutes (backend link)
    const token = jwt.sign(payload, secret, { expiresIn: "15m" });
    const link = `${process.env.BASE_URL_PROD}/forgot-password/${user._id}/${token}`;

    //send link to user
    await sendPasswordEmail({ to: email, username: user.username, link });
    console.log(link);
    res.status(StatusCodes.OK).json({ msg: "Link sent" });
  } else {
    throw new CustomError.BadRequestError("Email does not exist");
  }
};

export const verifyLink = async (
  req: express.Request,
  res: express.Response
) => {
  const { id, token } = req.params;
  const user: IUser | any = await Users.findOne({
    _id: id,
  });

  if (!user) {
    throw new CustomError.BadRequestError("Invalid credentials");
  } else {
    const secret = process.env.ACCESS_TOKEN_SECRET + user.password;

    //validate jwt
    try {
      jwt.verify(token, secret);
      //redirect to front end
      const newToken = jwt.sign(
        {
          id: user._id,
        },
        secret,
        { expiresIn: "15m" }
      );
      res.cookie("token", newToken, { httpOnly: true, secure: true });
      res.redirect(`https://www.gamer-hub.io/reset-password`);
    } catch (error) {
      throw new CustomError.BadRequestError("Invalid credentials");
    }
  }
};

export const resetPassword = async (
  req: express.Request,
  res: express.Response
) => {
  const { id, password } = req.body;
  const user: IUser | any = await Users.findOne({
    _id: id,
  });
  if (!user) {
    throw new CustomError.BadRequestError("User does not exist");
  } else {
    user.password = await bcrypt.hash(password, 10);
    await user.save();
    res.status(StatusCodes.OK).json({
      msg: "Password successfully changed",
    });
  }
};
