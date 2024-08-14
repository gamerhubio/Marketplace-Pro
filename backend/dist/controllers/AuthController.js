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
exports.checkAddress = exports.loginUser = exports.createUser = void 0;
const http_status_codes_1 = require("http-status-codes");
const mailer_1 = require("../libs/mailer");
const UserModel_1 = __importDefault(require("../models/UserModel"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const CustomError = __importStar(require("../errors"));
// create user
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // tslint:disable-next-line:no-console
    // console.log(req.body);
    // try {
    const usernameAlreadyExists = yield UserModel_1.default.findOne({
        username: req.body.username,
    });
    if (usernameAlreadyExists) {
        throw new CustomError.BadRequestError("Username already exists");
    }
    const emailAlreadyExists = yield UserModel_1.default.findOne({ email: req.body.email });
    if (emailAlreadyExists) {
        throw new CustomError.BadRequestError("Email already exists");
    }
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
    // } catch (error) {
    //   // Log error
    //   // console.error("Error creating user:", error);
    //   // Determine error type and send appropriate response
    //   if (error.name === "ValidationError") {
    //     // res
    //     //   .status(StatusCodes.BAD_REQUEST)
    //     //   .send({ message: "Validation error", details: error.errors });
    //     throw new CustomError.BadRequestError("Validation error");
    //   } else if (error.name === "MongoError" && error.code === 11000) {
    //     // res
    //     //   .status(StatusCodes.CONFLICT)
    //     //   .send({ message: "Duplicate key error", details: error.keyValue });
    //     throw new CustomError.BadRequestError("Duplicate key error");
    //   } else {
    //     // res
    //     //   .status(StatusCodes.INTERNAL_SERVER_ERROR)
    //     //   .send({ message: "Internal server error", details: error.message });
    //     throw new CustomError.BadRequestError("Internal server error");
    //   }
    // }
});
exports.createUser = createUser;
// login user
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // authenticate user
    // try {
    // get user
    const user = yield UserModel_1.default.findOne({
        $or: [{ username: req.body.username }, { email: req.body.username }],
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
            // res
            //   .status(StatusCodes.UNAUTHORIZED)
            //   .json({ msg: "Invalid credentials" });
            throw new CustomError.UnauthenticatedError("Invalid Credentials");
        }
    }
    else {
        // res.status(StatusCodes.UNAUTHORIZED).json({ msg: "Invalid credentials" });
        throw new CustomError.UnauthenticatedError("Invalid Credentials");
    }
    // } catch (error) {
    //   // Send an internal server error response
    //   // return res
    //   //   .status(StatusCodes.INTERNAL_SERVER_ERROR)
    //   //   .json({ msg: "Internal server error", details: error.message });
    //   throw new CustomError.BadRequestError("Internal server error");
    // }
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