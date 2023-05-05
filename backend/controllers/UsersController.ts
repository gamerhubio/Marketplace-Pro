import express from 'express';
import { StatusCodes } from "http-status-codes";
import  Users  from "../models/UserModel";
import { sendConfirmationEmail } from "../libs/mailer";

interface IUser {
  _id: string,
  email: string,
  username: string,
  wallets: string[],
  verified: boolean,
  save: () => void
}
// create user
export  const createUser = async (req:express.Request, res:express.Response) => {
  try {
    // create user
    const user:IUser | any = await Users.create({ ...req.body });

    const data = {
        id:user._id,
        email: user.email,
        username: user.username,
        wallets: user.wallets,
        verified: user.verified,
        challenges: user.challenges
    }
    // tslint:disable-next-line:no-console
    console.log(data)
    // send email
    await sendConfirmationEmail({ toUser: data, hash: data.id })

    // send response
    res.status(StatusCodes.CREATED).json({
      user:data ,
    });
  } catch (error) {
    // throw error
    res.status(StatusCodes.BAD_REQUEST).send(error);
  }
};


// get users
export const getUsers = async (req:express.Request, res:express.Response) => {
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
  if (req.query.pointer) {

try {
      const { pointer } = req.query;

      // mark verified
  const user: IUser | any = await Users.findOne({ _id: pointer });

  user.verified = true;
  await user.save()
      res.redirect(StatusCodes.TEMPORARY_REDIRECT, `${process.env.DOMAIN}`)
    } catch (error) {
      // throw error
      res.status(StatusCodes.BAD_REQUEST).send(error);
    }
  } else {
    try {
    const { address } = req.params;

    // get user
    const user = await Users.find({
      wallets: { $elemMatch: { $eq: address } },
    });

    res.status(StatusCodes.OK).json({
      user,
    });
  } catch (error) {
    // throw error
    res.status(StatusCodes.NOT_FOUND).send(error);
    }
  }

};

// update user
 export const updateUser = async (req:express.Request, res:express.Response) => {
  try {
    const { address } = req.params;

    // update query
    const user = await Users.findOneAndUpdate({ email: address }, req.body, {});

    res.status(StatusCodes.OK).json({
      user,
    });
  } catch (error) {
    // throw error
    res.status(StatusCodes.BAD_REQUEST).send(error);
  }
};