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
exports.checkExpiry = exports.recordSubscription = void 0;
const http_status_codes_1 = require("http-status-codes");
const SubscriptionModel_1 = __importDefault(require("../models/SubscriptionModel"));
const mailer_1 = require("../libs/mailer");
// create user
const recordSubscription = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // @ts-ignore
    req.body.user = req.user.id;
    try {
        // get subscription
        let subscription = yield SubscriptionModel_1.default.findOne({
            user: req.body.user,
        });
        // console.log(subscription);
        if (subscription) {
            // update Subscription
            subscription.plan = req.body.plan;
            subscription.endDate = req.body.endDate;
            yield subscription.save();
            // develop data for mail
            const data = {
                id: subscription._id,
                email: req.body.email,
                username: req.body.username,
                plan: subscription.plan,
                startDate: req.body.startDate,
                endDate: req.body.endDate,
            };
            // send home
            yield (0, mailer_1.sendSubscriptionMail)({ toUser: data });
            res.status(http_status_codes_1.StatusCodes.CREATED).json({ msg: "subscription recorded" });
        }
        else {
            // create subscription
            subscription = yield SubscriptionModel_1.default.create(Object.assign({}, req.body));
            // data for mail
            const data = {
                id: subscription._id,
                email: req.body.email,
                username: req.body.username,
                plan: subscription.plan,
                startDate: req.body.startDate,
                endDate: req.body.endDate,
            };
            // send email
            yield (0, mailer_1.sendSubscriptionMail)({ toUser: data });
            // send dashboard
            res.status(http_status_codes_1.StatusCodes.CREATED).json({ msg: "subscription recorded" });
        }
    }
    catch (error) {
        // throw error
        res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send(error);
    }
});
exports.recordSubscription = recordSubscription;
// check for any active subscription
const checkExpiry = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        // get user
        const subscription = yield SubscriptionModel_1.default.findOne({
            user: id,
        });
        // tslint:disable-next-line:no-console
        // console.log(subscription);
        if (!subscription) {
            // return false
            res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({ msg: false });
        }
        else {
            // calculate date difference
            const date1 = new Date(subscription.endDate);
            const date2 = Date.now();
            const diffTime = Date.now() - subscription.endDate;
            if (diffTime > 0) {
                // return false
                res.status(http_status_codes_1.StatusCodes.OK).json({ msg: false });
            }
            else {
                // return true
                res.status(http_status_codes_1.StatusCodes.OK).json({ msg: true });
            }
        }
    }
    catch (error) {
        // console.log(error)
        // throw error
        res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).send(error);
    }
});
exports.checkExpiry = checkExpiry;
//# sourceMappingURL=SubscriptionController.js.map