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
exports.loginUser = exports.createUser = void 0;
const http_status_codes_1 = require("http-status-codes");
const mailer_1 = require("../libs/mailer");
const UserModel_1 = __importDefault(require("../models/UserModel"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
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
            verified: user.verified,
            challenges: user.challenges
        };
        // send email
        yield (0, mailer_1.sendConfirmationEmail)({ toUser: data, hash: data.id });
        const myUser = {
            id: user._id,
            email: user.email,
            username: user.username,
        };
        // tslint:disable-next-line:no-console
        // console.log(myUser)
        // generate tokens
        const accessToken = jsonwebtoken_1.default.sign(Object.assign({}, myUser), `${process.env.ACCESS_TOKEN_SECRET}`, { expiresIn: '15m' });
        res.status(http_status_codes_1.StatusCodes.OK).json({ accessToken });
    }
    catch (error) {
        // throw error
        res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send(error);
    }
});
exports.createUser = createUser;
// login user
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // authenticate user
    try {
        const { address } = req.body;
        // get user
        const user = yield UserModel_1.default.find({
            wallets: { $elemMatch: { $eq: address } },
        });
        if (user.length > 0) {
            if (!user[0].email || !user[0].username) {
                // return user object for account creation
                res.status(http_status_codes_1.StatusCodes.OK).json({
                    user,
                });
            }
            else {
                const myUser = {
                    id: user[0]._id,
                    email: user[0].email,
                    username: user[0].username,
                };
                // tslint:disable-next-line:no-console
                // console.log(myUser)
                // generate tokens
                const accessToken = jsonwebtoken_1.default.sign(Object.assign({}, myUser), `${process.env.ACCESS_TOKEN_SECRET}`, { expiresIn: '15m' });
                res.status(http_status_codes_1.StatusCodes.OK).json({ accessToken });
            }
        }
        else {
            // return user object for account creation
            res.status(http_status_codes_1.StatusCodes.OK).json({
                user,
            });
        }
    }
    catch (error) {
        // console.log(error)
        // throw error
        res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).send(error);
    }
});
exports.loginUser = loginUser;
//# sourceMappingURL=AuthController.js.map