"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CustomAPIError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name; // Optional: To set the error name to the class name
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.default = CustomAPIError;
//# sourceMappingURL=custom-api.js.map