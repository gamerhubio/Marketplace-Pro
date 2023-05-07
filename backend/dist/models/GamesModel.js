"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const gameSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: [true, "Please provide name"],
    },
    chain: {
        type: String,
        required: [true, "Please add chain"],
    },
    image: {
        type: String,
        required: [true, "Please add image"],
    },
    categories: {
        type: Map,
        of: Number,
        default: {
            "p2e": true,
            "action": true,
            "metaverse": true
        }
    },
});
exports.default = mongoose_1.default.model("Games", gameSchema);
//# sourceMappingURL=GamesModel.js.map