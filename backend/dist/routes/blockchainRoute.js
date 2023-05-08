"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const BlockchainController_1 = require("../controllers/BlockchainController");
// users routes
router.route('/:address').get(BlockchainController_1.getUser);
exports.default = router;
//# sourceMappingURL=blockchainRoute.js.map