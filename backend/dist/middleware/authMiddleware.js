"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null)
        res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).json({ msg: "Unauthorized user" });
    jsonwebtoken_1.default.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err)
            res.status(http_status_codes_1.StatusCodes.FORBIDDEN).json({ msg: "Invalid token" });
        // @ts-ignore
        req.user = user;
        next();
    });
};
exports.default = authMiddleware;
//# sourceMappingURL=authMiddleware.js.map