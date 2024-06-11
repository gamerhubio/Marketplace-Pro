import express from "express";
const router = express.Router();
import {
  getUser,
  getUserDetail,
  getUsers,
  rewardUser,
  updateUser,
} from "../controllers/UsersController";

// users routes
router.route("/").get(getUsers);
router.route("/:address").get(getUser).patch(updateUser);
router.route("/detail/:id").get(getUserDetail);
router.route("/reward/:id").patch(rewardUser);
export default router;
