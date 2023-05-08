import express from 'express';
import { StatusCodes } from "http-status-codes";
import Users from "../models/UserModel";


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
export const confirmEmail = async (req: express.Request, res: express.Response) => {

    try {
        const { id } = req.params;

        // mark verified
        const user: IUser | any = await Users.findOne({ _id: id });
        user.verified = true;

        await user.save()
        res.redirect(StatusCodes.TEMPORARY_REDIRECT, `${process.env.DOMAIN}`)
        } catch (error) {
        // throw error
        res.status(StatusCodes.BAD_REQUEST).send(error);
    }
}


