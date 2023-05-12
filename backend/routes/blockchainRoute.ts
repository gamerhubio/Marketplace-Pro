import express from 'express';
const router = express.Router();
import {
    getUser,
} from "../controllers/BlockchainController"


// users routes
router.route('/:address').get(getUser);
export default router;
