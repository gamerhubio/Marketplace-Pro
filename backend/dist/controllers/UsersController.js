"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.rewardUser = exports.updateUser = exports.getUserDetail = exports.getUser = exports.getUsers = void 0;
const http_status_codes_1 = require("http-status-codes");
const UserModel_1 = __importDefault(require("../models/UserModel"));
const CustomError = __importStar(require("../errors"));
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
// reward user
const rewardUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    // @ts-ignore
    const user = yield UserModel_1.default.findOne({ _id: id });
    if (user) {
        const lastUpdate = user.last_unique_login;
        const isDifferenceGreaterThan24Hours = (date1, date2) => {
            //also reward already existing users
            if (!date1)
                return true;
            const millisecondsInAnHour = 1000 * 60 * 60;
            const diffInMilliseconds = Math.abs(date1.getTime() - date2.getTime());
            const diffInHours = diffInMilliseconds / millisecondsInAnHour;
            return diffInHours >= 24;
        };
        const now = new Date();
        //also reward already existing users
        if (isDifferenceGreaterThan24Hours(lastUpdate, now)) {
            // Reward the user
            const reward = user.credit + 10;
            user.credit = reward;
            user.last_unique_login = now; // Update the last_unique_login to current time
            yield user.save(); // Save the updated user document
            res
                .status(http_status_codes_1.StatusCodes.OK)
                .json({ msg: "User rewarded", lastUpdate, credit: reward });
        }
        else {
            throw new CustomError.BadRequestError("User already rewarded");
        }
    }
    else {
        throw new CustomError.UnauthenticatedError("Invalid request");
    }
});
exports.rewardUser = rewardUser;
//# sourceMappingURL=UsersController.js.map