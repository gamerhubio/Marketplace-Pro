import express from 'express';
import { StatusCodes } from "http-status-codes";
import  Games  from "../models/GamesModel";

interface IGame {
    _id: string,
    name:string,
    chain:string,
    image:string,
    categories:{
        p2e:boolean,
        Action:boolean,
        metaverse:boolean
    }
}
// create user
export  const createGame = async (req:express.Request, res:express.Response) => {
  try {
    // create user
    const game:IGame | any = await Games.create({ ...req.body });

    const data = {
        _id: game._id,
        name:game.name,
        chain:game.chain,
        image:game.image,
        categories:game.categories
    }
    // tslint:disable-next-line:no-console
    console.log(data)

    // send response
    res.status(StatusCodes.CREATED).json({
      user:data ,
    });
  } catch (error) {
    // throw error
    res.status(StatusCodes.BAD_REQUEST).send(error);
  }
};

