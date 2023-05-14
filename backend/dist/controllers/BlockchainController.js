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
exports.getUser = void 0;
const http_status_codes_1 = require("http-status-codes");
const UserModel_1 = __importDefault(require("../models/UserModel"));
// get a user
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // extract info from url
    try {
        const { address } = req.params;
        const { amt } = req.query;
        // get user
        const user = yield UserModel_1.default.find({
            wallets: { $elemMatch: { $eq: address } },
        });
        const currUser = user[0];
        // check amount of credit available
        // @ts-ignore
        if (Number(amt) > currUser.credit) {
            // @ts-ignore
            res.status(http_status_codes_1.StatusCodes.OK).json({ toPay: 0 });
        }
        else {
            // calcuate ght equivalent
            const ghtValue = Number(amt) / 1000;
            // update value in database
            // @ts-ignore
            currUser.credit = Number(currUser.credit) - Number(amt);
            currUser.save();
            // return to contract
            res.status(http_status_codes_1.StatusCodes.OK).json({ toPay: ghtValue });
        }
    }
    catch (error) {
        // throw error
        res.status(http_status_codes_1.StatusCodes.NOT_FOUND).send(error);
    }
});
exports.getUser = getUser;
//# sourceMappingURL=BlockchainController.js.map