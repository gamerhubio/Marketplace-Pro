import express from "express";
const router = express.Router();
import { recordSubscription } from "../controllers/SubscriptionController";

router.route("/").post(recordSubscription);

export default router;
