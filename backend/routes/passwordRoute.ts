import express from "express";
const router = express.Router();

import {
  requestLink,
  resetPassword,
  verifyLink,
} from "../controllers/PasswordController";

// auth routes
router.route("/").post(requestLink);
router.route("/:id/:token").get(verifyLink);
router.route("/reset").post(resetPassword);
export default router;
