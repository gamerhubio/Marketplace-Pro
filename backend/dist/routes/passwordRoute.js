"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const PasswordController_1 = require("../controllers/PasswordController");
// auth routes
router.route("/").post(PasswordController_1.requestLink);
router.route("/reset").post(PasswordController_1.resetPassword);
exports.default = router;
//# sourceMappingURL=passwordRoute.js.map