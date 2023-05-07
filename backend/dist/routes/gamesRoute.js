"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const GamesController_1 = require("../controllers/GamesController");
// games routes
router.route('/').post(GamesController_1.createGame);
// favorites routes
exports.default = router;
//# sourceMappingURL=gamesRoute.js.map