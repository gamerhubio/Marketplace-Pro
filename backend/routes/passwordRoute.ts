import express from "express";
const router = express.Router();

import { requestLink, resetPassword } from "../controllers/PasswordController";

// auth routes
router.route("/").post(requestLink);
router.route("/reset").post(resetPassword);
export default router;
