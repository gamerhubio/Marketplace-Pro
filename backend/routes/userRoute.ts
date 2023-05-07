import express from 'express';
const router = express.Router();
import {
    getUser,
    getUsers,
    updateUser
} from "../controllers/UsersController"


// users routes
router.route('/').get(getUsers);
router.route('/:address').get(getUser).patch(updateUser);
export default router;
