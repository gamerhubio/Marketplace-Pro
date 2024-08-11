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
exports.resetPassword = exports.requestLink = void 0;
const http_status_codes_1 = require("http-status-codes");
const UserModel_1 = __importDefault(require("../models/UserModel"));
const CustomError = __importStar(require("../errors"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const mailer_1 = require("../libs/mailer");
const requestLink = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    const user = yield UserModel_1.default.findOne({
        email,
    });
    if (user) {
        const payload = {
            id: user._id,
        };
        //create one time link valid for 15 minutes
        const token = jsonwebtoken_1.default.sign(payload, process.env.PASSWORD_TOKEN_SECRET, {
            expiresIn: "15m",
        });
        const link = `${process.env.DOMAIN}/reset-password?token=${token}`;
        //send link to user
        yield (0, mailer_1.sendPasswordEmail)({ to: email, username: user.username, link });
        console.log(link);
        res.status(http_status_codes_1.StatusCodes.OK).json({ msg: "Link sent" });
    }
    else {
        throw new CustomError.BadRequestError("Email does not exist");
    }
});
exports.requestLink = requestLink;
const resetPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { password, token } = req.body;
    try {
        // Verify the token
        const decoded = jsonwebtoken_1.default.verify(token, process.env.PASSWORD_TOKEN_SECRET);
        // Fetch the user from the database
        const user = yield UserModel_1.default.findOne({ _id: decoded.id });
        if (!user) {
            throw new CustomError.NotFoundError("User not found");
        }
        // Hash the new password and save it
        user.password = yield bcryptjs_1.default.hash(password, 10);
        yield user.save();
        // Send a success response
        res.status(http_status_codes_1.StatusCodes.OK).json({ msg: "Password successfully changed" });
    }
    catch (error) {
        // Handle errors
        if (error instanceof jsonwebtoken_1.default.JsonWebTokenError) {
            return res
                .status(http_status_codes_1.StatusCodes.UNAUTHORIZED)
                .json({ msg: "Invalid or expired token" });
        }
        if (error instanceof CustomError.NotFoundError) {
            return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({ msg: error.message });
        }
        console.error("Error resetting password:", error);
        res
            .status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR)
            .json({ msg: "Internal Server Error" });
    }
});
exports.resetPassword = resetPassword;
//# sourceMappingURL=PasswordController.js.map