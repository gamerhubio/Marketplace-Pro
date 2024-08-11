"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnauthorizedError = exports.BadRequestError = exports.NotFoundError = exports.UnauthenticatedError = exports.CustomAPIError = void 0;
const custom_api_1 = __importDefault(require("./custom-api"));
exports.CustomAPIError = custom_api_1.default;
const unaunthenticated_1 = __importDefault(require("./unaunthenticated"));
exports.UnauthenticatedError = unaunthenticated_1.default;
const not_found_1 = __importDefault(require("./not-found"));
exports.NotFoundError = not_found_1.default;
const bad_request_1 = __importDefault(require("./bad-request"));
exports.BadRequestError = bad_request_1.default;
const unauthorized_1 = __importDefault(require("./unauthorized"));
exports.UnauthorizedError = unauthorized_1.default;
//# sourceMappingURL=index.js.map