import express from 'express';
const router = express.Router();

import { createGame } from '../controllers/GamesController';
// games routes
router.route('/').post(createGame)
// favorites routes


export default router;
