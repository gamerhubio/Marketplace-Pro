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
exports.updateUser = exports.getUserDetail = exports.getUser = exports.getUsers = void 0;
const http_status_codes_1 = require("http-status-codes");
const UserModel_1 = __importDefault(require("../models/UserModel"));
// get users
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // get users
        const users = yield UserModel_1.default.find({});
        res.status(http_status_codes_1.StatusCodes.OK).json({
            users,
        });
    }
    catch (error) {
        // throw error
        res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send(error);
    }
});
exports.getUsers = getUsers;
// get a user
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { address } = req.params;
        // get user
        const user = yield UserModel_1.default.find({
            wallets: { $elemMatch: { $eq: address } },
        });
        res.status(http_status_codes_1.StatusCodes.OK).json(user[0]);
    }
    catch (error) {
        // throw error
        res.status(http_status_codes_1.StatusCodes.NOT_FOUND).send(error);
    }
});
exports.getUser = getUser;
// get a user
const getUserDetail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        // get user
        const user = yield UserModel_1.default.findOne({ _id: id });
        if (user) {
            res.status(http_status_codes_1.StatusCodes.OK).json(user);
        }
        else {
            res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({ msg: "user not found" });
        }
    }
    catch (error) {
        // throw error
        res.status(http_status_codes_1.StatusCodes.NOT_FOUND).send(error);
    }
});
exports.getUserDetail = getUserDetail;
// update user
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { address } = req.params;
        // update query
        const user = yield UserModel_1.default.findOneAndUpdate({ email: address }, req.body, {
            new: true,
        });
        res.status(http_status_codes_1.StatusCodes.OK).json(user);
    }
    catch (error) {
        // throw error
        res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send(error);
    }
});
exports.updateUser = updateUser;
//# sourceMappingURL=UsersController.js.map