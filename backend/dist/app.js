"use strict";
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
const dotenv_1 = __importDefault(require("dotenv"));
require("express-async-errors");
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const connect_1 = __importDefault(require("./db/connect"));
const authRoute_1 = __importDefault(require("./routes/authRoute"));
const userRoute_1 = __importDefault(require("./routes/userRoute"));
const gamesRoute_1 = __importDefault(require("./routes/gamesRoute"));
const subscriptionRoute_1 = __importDefault(require("./routes/subscriptionRoute"));
const favoriteRoute_1 = __importDefault(require("./routes/favoriteRoute"));
const confirmationRoute_1 = __importDefault(require("./routes/confirmationRoute"));
const blockchainRoute_1 = __importDefault(require("./routes/blockchainRoute"));
const not_found_1 = __importDefault(require("./middleware/not-found"));
const error_handler_1 = __importDefault(require("./middleware/error-handler"));
const authMiddleware_1 = __importDefault(require("./middleware/authMiddleware"));
const cors_1 = __importDefault(require("cors"));
// middleware
app.use((0, cors_1.default)({
    origin: [
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "https://mygamerhub.netlify.app",
        "https://bnb-hackathon-pro.vercel.app",
    ],
    credentials: true,
}));
app.use(express_1.default.static("./public"));
app.use(express_1.default.json());
//public routes
app.use("/api/v1/auth", authRoute_1.default);
app.use("/api/v1/games", gamesRoute_1.default);
app.use("/api/v1/confirm", confirmationRoute_1.default);
app.use("/api/v1/blockchainroute", blockchainRoute_1.default);
//restricted routes
app.use("/api/v1/users", authMiddleware_1.default, userRoute_1.default);
app.use("/api/v1/favorites", authMiddleware_1.default, favoriteRoute_1.default);
app.use("/api/v1/subscription", authMiddleware_1.default, subscriptionRoute_1.default);
//error middlewares
app.use(not_found_1.default);
app.use(error_handler_1.default);
const port = process.env.PORT || 10000;
//start server
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, connect_1.default)(`${process.env.MONGO_URI}`);
        app.listen(port, () => 
        // tslint:disable-next-line:no-console
        console.log(`Server is listening on port ${port}...`));
    }
    catch (error) {
        console.log(error);
    }
});
start();
//# sourceMappingURL=app.js.map