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
exports.recordSubscription = void 0;
const http_status_codes_1 = require("http-status-codes");
const SubscriptionModel_1 = __importDefault(require("../models/SubscriptionModel"));
const mailer_1 = require("../libs/mailer");
// create user
const recordSubscription = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // get subscription
        let subscription = yield SubscriptionModel_1.default.findOne({ email: req.body.email });
        if (subscription) {
            // update Subscription
            subscription.email = req.body.email;
            subscription.username = req.body.username;
            subscription.plan = req.body.plan;
            yield subscription.save();
            const data = {
                id: subscription._id,
                email: subscription.email,
                username: subscription.username,
                plan: subscription.plan,
                startDate: req.body.startDate,
                endDate: req.body.endDate
            };
            // send home
            yield (0, mailer_1.sendSubscriptionMail)({ toUser: data });
            res.redirect(http_status_codes_1.StatusCodes.TEMPORARY_REDIRECT, '/');
        }
        else {
            // create subscription
            subscription = yield SubscriptionModel_1.default.create(Object.assign({}, req.body));
            const data = {
                id: subscription._id,
                email: subscription.email,
                username: subscription.username,
                plan: subscription.plan,
                startDate: req.body.startDate,
                endDate: req.body.endDate
            };
            // send email
            yield (0, mailer_1.sendSubscriptionMail)({ toUser: data });
            // send home
            res.redirect(http_status_codes_1.StatusCodes.TEMPORARY_REDIRECT, '/');
        }
    }
    catch (error) {
        // throw error
        res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send(error);
    }
});
exports.recordSubscription = recordSubscription;
//# sourceMappingURL=SubscriptionController.js.map