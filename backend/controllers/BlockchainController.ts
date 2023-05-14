import express from "express";
import { StatusCodes } from "http-status-codes";
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

// get a user
export const getUser = async (req: express.Request, res: express.Response) => {
  // extract info from url
  try {
    const { address } = req.params;
    const { amt } = req.query;

    // get user
    const user = await Users.find({
      wallets: { $elemMatch: { $eq: address } },
    });
    const currUser = user[0];

    // check amount of credit available
    // @ts-ignore
    if (Number(amt) > currUser.credit) {
      // @ts-ignore
      res.status(StatusCodes.OK).json({ toPay: 0 });
    } else {
      // calcuate ght equivalent
      const ghtValue = Number(amt) / 1000;
      // update value in database
      // @ts-ignore
      currUser.credit = Number(currUser.credit) - Number(amt);
      currUser.save();

      // return to contract
      res.status(StatusCodes.OK).json({ toPay: ghtValue });
    }
  } catch (error) {
    // throw error
    res.status(StatusCodes.NOT_FOUND).send(error);
  }
};
