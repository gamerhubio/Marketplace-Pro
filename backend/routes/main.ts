import express from 'express';
const router = express.Router();
import  { recordSubscription } from "../controllers/SubscriptionController"
import {
    createUser,
    getUser,
    getUsers,
    updateUser
} from "../controllers/UsersController"

router.route('/users').post( createUser).get(getUsers);
router.route('/users/:address').get(getUser).patch(updateUser);
router.route('/subscription').post(recordSubscription);




export default router;
