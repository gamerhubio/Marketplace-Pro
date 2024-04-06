"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    email: {
        type: String,
        required: [true, "Please provide email"],
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please provide a valid email",
        ],
        unique: true,
    },
    username: {
        type: String,
        required: [true, "Please provide username"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please provide password"],
    },
    wallets: {
        type: [String],
        required: [true, "Please add users wallet"],
        default: [],
    },
    credit: {
        type: Number,
        default: 15,
    },
    challenges: {
        type: Map,
        of: Number,
        default: {
            GamePlay: 0,
            NFTPruchase: 0,
            ADSWatch: 0,
            VideoStream: 0,
            GameAssetPurchase: 0,
            TournamentPlay: 0,
        },
    },
    verified: {
        type: Boolean,
        default: false,
    },
});
// const User = mongoose.model("User", userSchema);
exports.default = mongoose_1.default.model("Users", userSchema);
//# sourceMappingURL=UserModel.js.map