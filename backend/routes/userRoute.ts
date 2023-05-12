import express from "express";
const router = express.Router();
import {
  getUser,
  getUserDetail,
  getUsers,
  updateUser,
} from "../controllers/UsersController";

// users routes
router.route("/").get(getUsers);
router.route("/:address").get(getUser).patch(updateUser);
router.route("/detail/:id").get(getUserDetail);
export default router;
