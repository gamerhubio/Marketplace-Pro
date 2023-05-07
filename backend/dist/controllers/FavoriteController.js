"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFavorite = exports.getUsersFavorites = exports.createFavorite = void 0;
const http_status_codes_1 = require("http-status-codes");
const FavoritesModel_1 = __importDefault(require("../models/FavoritesModel"));
// create favorite
const createFavorite = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // create favorite
        // @ts-ignore
        req.body.user = req.user.id;
        const favorite = yield FavoritesModel_1.default.create(Object.assign({}, req.body));
        const data = {
            id: favorite._id,
            title: favorite.title,
            user: favorite.user,
            category: favorite.category
        };
        // tslint:disable-next-line:no-console
        console.log(data);
        // send response
        res.status(http_status_codes_1.StatusCodes.CREATED).json(data);
    }
    catch (error) {
        // throw error
        res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send(error);
    }
});
exports.createFavorite = createFavorite;
// get all users favorites
const getUsersFavorites = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { category, sort } = req.query;
    // @ts-ignore
    const queryObject = {
        // @ts-ignore
        user: req.user.id,
        category: ''
    };
    // if (userId) {
    //     queryObject.user = `${userId}`
    // }
    if (category) {
        queryObject.category = `${category}`;
    }
    else {
        delete queryObject.category;
    }
    let result = FavoritesModel_1.default.find(queryObject);
    // sort
    if (sort) {
        // @ts-ignore
        const sortList = sort.split(',').join(' ');
        result = result.sort(sortList);
    }
    else {
        result = result.sort('createdAt');
    }
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    result = result.skip(skip).limit(limit);
    const favorites = yield result;
    res.status(http_status_codes_1.StatusCodes.OK).json(favorites);
});
exports.getUsersFavorites = getUsersFavorites;
const deleteFavorite = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const favorite = yield FavoritesModel_1.default.findByIdAndRemove({
        _id: id,
    });
    if (!favorite) {
        res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({ msg: "No data found for this Id" });
    }
    res.status(http_status_codes_1.StatusCodes.OK).send();
});
exports.deleteFavorite = deleteFavorite;
//# sourceMappingURL=FavoriteController.js.map