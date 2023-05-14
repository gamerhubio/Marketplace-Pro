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
exports.checkAddress = exports.loginUser = exports.createUser = void 0;
const http_status_codes_1 = require("http-status-codes");
const mailer_1 = require("../libs/mailer");
const UserModel_1 = __importDefault(require("../models/UserModel"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
// create user
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // tslint:disable-next-line:no-console
    // console.log(req.body);
    try {
        // create user
        const user = yield UserModel_1.default.create({
            email: req.body.email,
            username: req.body.username,
            password: yield bcryptjs_1.default.hash(req.body.password, 10),
            wallets: req.body.wallets,
        });
        // email info
        const data = {
            id: user._id,
            email: user.email,
            username: user.username,
            wallets: user.wallets,
            verified: user.verified,
            challenges: user.challenges,
        };
        // send email
        yield (0, mailer_1.sendConfirmationEmail)({ toUser: data, hash: data.id });
        const myUser = {
            id: user._id,
            email: user.email,
            username: user.username,
            wallets: user.wallets,
        };
        // generate tokens
        const accessToken = jsonwebtoken_1.default.sign(Object.assign({}, myUser), `${process.env.ACCESS_TOKEN_SECRET}`, { expiresIn: "24h" });
        // return response
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
        // get user
        const user = yield UserModel_1.default.findOne({
            username: req.body.username,
        });
        if (user) {
            // compare password
            if (yield bcryptjs_1.default.compare(req.body.password, user.password)) {
                const myUser = {
                    id: user._id,
                    email: user.email,
                    username: user.username,
                    wallets: user.wallets,
                };
                // generate tokens
                const accessToken = jsonwebtoken_1.default.sign(Object.assign({}, myUser), `${process.env.ACCESS_TOKEN_SECRET}`, { expiresIn: "24h" });
                res.status(http_status_codes_1.StatusCodes.OK).json({ accessToken });
            }
            else {
                res
                    .status(http_status_codes_1.StatusCodes.UNAUTHORIZED)
                    .json({ msg: "Invalid credentials" });
            }
        }
        else {
            res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).json({ msg: "Invalid credentials" });
        }
    }
    catch (error) {
        // console.log(error)
        // throw error
        res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).send(error);
    }
});
exports.loginUser = loginUser;
// check address user
const checkAddress = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // authenticate user
    try {
        const { address } = req.params;
        // get user
        const user = yield UserModel_1.default.find({
            wallets: { $elemMatch: { $eq: address } },
        });
        if (user.length > 0) {
            // return true
            res.status(http_status_codes_1.StatusCodes.OK).json({ msg: true });
        }
        else {
            // return false
            res.status(http_status_codes_1.StatusCodes.OK).json({ msg: false });
        }
    }
    catch (error) {
        // console.log(error)
        // throw error
        res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).send(error);
    }
});
exports.checkAddress = checkAddress;
//# sourceMappingURL=AuthController.js.map