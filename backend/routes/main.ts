import express from 'express';
const router = express.Router();
import  { recordSubscription } from "../controllers/SubscriptionController"
import {
    createUser,
    getUser,
    getUsers,
    updateUser
} from "../controllers/UsersController"
import { createGame } from '../controllers/GamesController';
import { createFavorite, deleteFavorite, getUsersFavorites } from '../controllers/FavoriteController';

router.route('/users').post( createUser).get(getUsers);
router.route('/users/:address').get(getUser).patch(updateUser);
router.route('/subscription').post(recordSubscription);
router.route('/games').post( createGame)
router.route('/favorites').post( createFavorite).get(getUsersFavorites)
router.route('/favorites/:id').delete(deleteFavorite)



export default router;
