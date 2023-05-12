"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const AuthController_1 = require("../controllers/AuthController");
const AuthController_2 = require("../controllers/AuthController");
const SubscriptionController_1 = require("../controllers/SubscriptionController");
// auth routes
router.route("/login").post(AuthController_2.loginUser);
router.route("/register").post(AuthController_1.createUser);
router.route("/checker/:address").get(AuthController_1.checkAddress);
router.route("/subscription/expiration/:id").get(SubscriptionController_1.checkExpiry);
exports.default = router;
//# sourceMappingURL=authRoute.js.map