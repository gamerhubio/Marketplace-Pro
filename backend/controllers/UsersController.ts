import express from "express";
import { StatusCodes } from "http-status-codes";
import Subscriptions from "../models/SubscriptionModel";
import Users from "../models/UserModel";
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
  credit: number;
  save: () => void;
  last_unique_login: Date;
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

// Reward user
export const rewardUser = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  const { id } = req.params;

  //@ts-ignore
  const user: IUser | null = await Users.findOne({ _id: id });

  if (!user) {
    res.status(StatusCodes.UNAUTHORIZED).json({ msg: "Invalid request" });
    return;
  }

  const lastUpdate: Date | null = user.last_unique_login;

  const isDifferenceGreaterThan24Hours = (
    date1: Date | null,
    date2: Date
  ): boolean => {
    // Also reward already existing users
    if (!date1) return true;
    const millisecondsInAnHour = 1000 * 60 * 60;
    const diffInMilliseconds = Math.abs(date1.getTime() - date2.getTime());
    const diffInHours = diffInMilliseconds / millisecondsInAnHour;
    return diffInHours >= 24;
  };

  const now = new Date();
  // Also reward already existing users
  if (isDifferenceGreaterThan24Hours(lastUpdate, now)) {
    // Reward the user
    user.credit += 10;
    user.last_unique_login = now; // Update the last_unique_login to current time
    await user.save(); // Save the updated user document

    res.status(StatusCodes.OK).json({
      msg: "User rewarded",
      lastUpdate,
      credit: user.credit,
    });
  } else {
    throw new CustomError.UnauthenticatedError("User already rewarded");
  }
};
