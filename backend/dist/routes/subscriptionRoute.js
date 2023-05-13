"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const SubscriptionController_1 = require("../controllers/SubscriptionController");
router.route("/").post(SubscriptionController_1.recordSubscription);
exports.default = router;
//# sourceMappingURL=subscriptionRoute.js.map