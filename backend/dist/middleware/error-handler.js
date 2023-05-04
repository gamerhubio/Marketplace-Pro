"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const custom_error_1 = __importDefault(require("../errors/custom-error"));
const errorHandlerMiddleware = (err, req, res, next) => {
    if (err instanceof custom_error_1.default) {
        return res.status(err.statusCode).json({ msg: err.message });
    }
    return res.status(500).send('Something went wrong try again later');
};
exports.default = errorHandlerMiddleware;
//# sourceMappingURL=error-handler.js.map