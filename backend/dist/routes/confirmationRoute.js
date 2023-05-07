"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ConfirmationController_1 = require("../controllers/ConfirmationController");
const router = express_1.default.Router();
// confirmation routes
router.route('/email/:id').get(ConfirmationController_1.confirmEmail);
exports.default = router;
//# sourceMappingURL=confirmationRoute.js.map