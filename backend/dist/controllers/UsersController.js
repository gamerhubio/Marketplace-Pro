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
exports.updateUser = exports.getUser = exports.getUsers = exports.createUser = void 0;
const http_status_codes_1 = require("http-status-codes");
const UserModel_1 = __importDefault(require("../models/UserModel"));
const mailer_1 = require("../libs/mailer");
// create user
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // create user
        const user = yield UserModel_1.default.create(Object.assign({}, req.body));
        const data = {
            id: user._id,
            email: user.email,
            username: user.username,
            wallets: user.wallets,
            verified: user.verified
        };
        // tslint:disable-next-line:no-console
        console.log(data);
        // send email
        yield (0, mailer_1.sendConfirmationEmail)({ toUser: data, hash: data.id });
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
exports.createUser = createUser;
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
    if (req.query.pointer) {
        try {
            const { pointer } = req.query;
            // mark verified
            const user = yield UserModel_1.default.findOne({ _id: pointer });
            user.verified = true;
            yield user.save();
            res.redirect(http_status_codes_1.StatusCodes.TEMPORARY_REDIRECT, `${process.env.DOMAIN}`);
        }
        catch (error) {
            // throw error
            res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send(error);
        }
    }
    else {
        try {
            const { address } = req.query;
            // get user
            const user = yield UserModel_1.default.find({
                wallets: { $elemMatch: { $eq: address } },
            });
            res.status(http_status_codes_1.StatusCodes.OK).json({
                user,
            });
        }
        catch (error) {
            // throw error
            res.status(http_status_codes_1.StatusCodes.NOT_FOUND).send(error);
        }
    }
});
exports.getUser = getUser;
// update user
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { address } = req.query;
        // update query
        const user = yield UserModel_1.default.findOneAndUpdate({ email: address }, req.body, {});
        res.status(http_status_codes_1.StatusCodes.OK).json({
            user,
        });
    }
    catch (error) {
        // throw error
        res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send(error);
    }
});
exports.updateUser = updateUser;
//# sourceMappingURL=UsersController.js.map