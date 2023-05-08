import express from 'express';
import { StatusCodes } from "http-status-codes";
import  Users  from "../models/UserModel";

type IUserList =  {
  _id: string,
  email: string,
  username: string,
  wallets: string[],
  verified: boolean,
  save: () => void
}[]

type IUser =  {
  _id: string,
  email: string,
  username: string,
  wallets: string[],
  verified: boolean,
  save: () => void
}


// get a user
export const getUser = async (req: express.Request, res: express.Response) => {

    try {
        const { address } = req.params;
        const {amt} = req.query
console.log(amt)
    // get user
    const user = await Users.find({
      wallets: { $elemMatch: { $eq: address } },
    });

    //return credit amount to block chain
    //@ts-ignore
    res.status(StatusCodes.OK).json({ credit: user[0].credit })
        
  } catch (error) {
    // throw error
    res.status(StatusCodes.NOT_FOUND).send(error);
    }
  }


