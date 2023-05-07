"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const favoriteSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: [true, "Please provide title"]
    },
    user: {
        type: mongoose_1.default.Types.ObjectId,
        ref: 'Users',
        required: [true, "Please provide user"],
    },
    category: {
        type: String,
        enum: {
            values: ['games', 'nfts', 'merchendise', 'events', 'streamed-videos'],
            message: '{VALUE} is not supported',
        },
    },
}, { timestamps: true });
exports.default = mongoose_1.default.model("Favorites", favoriteSchema);
//# sourceMappingURL=FavoritesModel.js.map