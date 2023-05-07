import express from 'express';
const router = express.Router();

import { createUser } from '../controllers/AuthController';
import { loginUser } from '../controllers/AuthController';

// auth routes
router.route('/login').post(loginUser);
router.route('/register').post( createUser);

export default router;
