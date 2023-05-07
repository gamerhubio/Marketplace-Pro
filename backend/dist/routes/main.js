"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const SubscriptionController_1 = require("../controllers/SubscriptionController");
const UsersController_1 = require("../controllers/UsersController");
const GamesController_1 = require("../controllers/GamesController");
const FavoriteController_1 = require("../controllers/FavoriteController");
router.route('/users').post(UsersController_1.createUser).get(UsersController_1.getUsers);
router.route('/users/:address').get(UsersController_1.getUser).patch(UsersController_1.updateUser);
router.route('/subscription').post(SubscriptionController_1.recordSubscription);
router.route('/games').post(GamesController_1.createGame);
router.route('/favorites').post(FavoriteController_1.createFavorite).get(FavoriteController_1.getUsersFavorites);
router.route('/favorites/:id').delete(FavoriteController_1.deleteFavorite);
router.route('/login').post(UsersController_1.loginUser);
exports.default = router;
//# sourceMappingURL=main.js.map