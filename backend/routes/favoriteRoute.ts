import express from 'express';
const router = express.Router();

import { createFavorite, deleteFavorite, getUsersFavorites } from '../controllers/FavoriteController';

// favorites routes
router.route('/').post( createFavorite).get(getUsersFavorites)
router.route('/:id').delete(deleteFavorite)


export default router;
