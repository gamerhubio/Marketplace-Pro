"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const UsersController_1 = require("../controllers/UsersController");
// users routes
router.route("/").get(UsersController_1.getUsers);
router.route("/:address").get(UsersController_1.getUser).patch(UsersController_1.updateUser);
router.route("/detail/:id").get(UsersController_1.getUserDetail);
exports.default = router;
//# sourceMappingURL=userRoute.js.map