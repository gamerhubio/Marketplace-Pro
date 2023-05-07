import express from 'express';
import { StatusCodes } from "http-status-codes";
import Favorites from '../models/FavoritesModel';

interface IFavorite {
  _id: string,
  user: string,
  title: string,
  category: string,
  save: () => void
}

type IQuery  = {
    user: string,
    category:string,
}

// create favorite
export  const createFavorite = async (req:express.Request, res:express.Response) => {
  try {
    // create favorite
    // @ts-ignore
    req.body.user = req.user.id
    const favorite:IFavorite | any = await Favorites.create({ ...req.body });

    const data = {
        id:favorite._id,
        title: favorite.title,
        user: favorite.user,
        category: favorite.category
    }
    // tslint:disable-next-line:no-console
    console.log(data)
    // send response
    res.status(StatusCodes.CREATED).json(data);
  } catch (error) {
    // throw error
    res.status(StatusCodes.BAD_REQUEST).send(error);
  }
};


// get all users favorites
export const getUsersFavorites = async (req: express.Request, res: express.Response) => {
  const { category, sort } = req.query;
  // @ts-ignore
  const queryObject: IQuery = {
      // @ts-ignore
        user: req.user.id,
        category: ''
    };

    // if (userId) {
    //     queryObject.user = `${userId}`
    // }

    if (category) {
        queryObject.category = `${category}`
    } else {
      delete queryObject.category
    }

    let result = Favorites.find(queryObject);

    // sort
    if (sort) {
        // @ts-ignore
        const sortList = sort.split(',').join(' ');
        result = result.sort(sortList);
    } else {
        result = result.sort('createdAt');
    }

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    result = result.skip(skip).limit(limit);

    const favorites = await result

    res.status(StatusCodes.OK).json(favorites)
}



export const deleteFavorite = async (req: express.Request, res: express.Response) => {
    const { id } = req.params
  const favorite = await Favorites.findByIdAndRemove({
    _id: id,
  })

  if (!favorite) {
    res.status(StatusCodes.NOT_FOUND).json({msg: "No data found for this Id"})
    }

  res.status(StatusCodes.OK).send()
}