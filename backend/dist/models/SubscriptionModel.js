"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const subscriptionSchema = new mongoose_1.default.Schema({
    email: {
        type: String,
        required: [true, "Please provide an email"],
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please provide a valid email",
        ],
        unique: true,
    },
    username: {
        type: String,
        required: [true, "Please provide a username"],
        unique: true,
    },
    plan: {
        type: Number,
        required: [true, "Please add a subscription plan"],
    },
    endDate: {
        type: Number,
        required: [true, "Please add date"],
    },
}, { timestamps: true });
// const User = mongoose.model("User", userSchema);
exports.default = mongoose_1.default.model("Subscriptions", subscriptionSchema);
//# sourceMappingURL=SubscriptionModel.js.map