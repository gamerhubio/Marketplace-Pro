"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const subscriptionSchema = new mongoose_1.default.Schema({
    user: {
        type: mongoose_1.default.Types.ObjectId,
        ref: "Users",
        required: [true, "Please provide user"],
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