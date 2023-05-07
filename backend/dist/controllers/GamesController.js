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
exports.createGame = void 0;
const http_status_codes_1 = require("http-status-codes");
const GamesModel_1 = __importDefault(require("../models/GamesModel"));
// create user
const createGame = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // create user
        const game = yield GamesModel_1.default.create(Object.assign({}, req.body));
        const data = {
            _id: game._id,
            name: game.name,
            chain: game.chain,
            image: game.image,
            categories: game.categories
        };
        // tslint:disable-next-line:no-console
        console.log(data);
        // send response
        res.status(http_status_codes_1.StatusCodes.CREATED).json({
            user: data,
        });
    }
    catch (error) {
        // throw error
        res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send(error);
    }
});
exports.createGame = createGame;
//# sourceMappingURL=GamesController.js.map