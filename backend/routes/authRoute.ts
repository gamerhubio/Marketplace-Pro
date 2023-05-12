import express from "express";
const router = express.Router();

import { checkAddress, createUser } from "../controllers/AuthController";
import { loginUser } from "../controllers/AuthController";
import { checkExpiry } from "../controllers/SubscriptionController";

// auth routes
router.route("/login").post(loginUser);
router.route("/register").post(createUser);
router.route("/checker/:address").get(checkAddress);
router.route("/subscription/expiration/:id").get(checkExpiry);

export default router;
