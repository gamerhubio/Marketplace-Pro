"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const FavoriteController_1 = require("../controllers/FavoriteController");
// favorites routes
router.route('/').post(FavoriteController_1.createFavorite).get(FavoriteController_1.getUsersFavorites);
router.route('/:id').delete(FavoriteController_1.deleteFavorite);
exports.default = router;
//# sourceMappingURL=favoriteRoute.js.map