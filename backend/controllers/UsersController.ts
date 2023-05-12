import express from "express";
import { StatusCodes } from "http-status-codes";
import Subscriptions from "../models/SubscriptionModel";
import Users from "../models/UserModel";

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

// get users
export const getUsers = async (req: express.Request, res: express.Response) => {
  try {
    // get users
    const users = await Users.find({});

    res.status(StatusCodes.OK).json({
      users,
    });
  } catch (error) {
    // throw error
    res.status(StatusCodes.BAD_REQUEST).send(error);
  }
};

// get a user
export const getUser = async (req: express.Request, res: express.Response) => {
  try {
    const { address } = req.params;

    // get user
    const user = await Users.find({
      wallets: { $elemMatch: { $eq: address } },
    });

    res.status(StatusCodes.OK).json(user[0]);
  } catch (error) {
    // throw error
    res.status(StatusCodes.NOT_FOUND).send(error);
  }
};
// get a user
export const getUserDetail = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;

    // get user
    const user = await Users.findOne({ _id: id });

    if (user) {
      res.status(StatusCodes.OK).json(user);
    } else {
      res.status(StatusCodes.NOT_FOUND).json({ msg: "user not found" });
    }
  } catch (error) {
    // throw error
    res.status(StatusCodes.NOT_FOUND).send(error);
  }
};

// update user
export const updateUser = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { address } = req.params;

    // update query
    const user = await Users.findOneAndUpdate({ email: address }, req.body, {
      new: true,
    });

    res.status(StatusCodes.OK).json(user);
  } catch (error) {
    // throw error
    res.status(StatusCodes.BAD_REQUEST).send(error);
  }
};
