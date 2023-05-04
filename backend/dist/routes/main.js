"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const SubscriptionController_1 = require("../controllers/SubscriptionController");
const UsersController_1 = require("../controllers/UsersController");
router.route('/users').post(UsersController_1.createUser).get(UsersController_1.getUsers);
router.route('/users/:address').get(UsersController_1.getUser).patch(UsersController_1.updateUser);
router.route('/subscription').post(SubscriptionController_1.recordSubscription);
exports.default = router;
//# sourceMappingURL=main.js.map