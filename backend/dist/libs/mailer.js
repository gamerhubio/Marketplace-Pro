"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendSubscriptionMail = exports.sendConfirmationEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const sendConfirmationEmail = ({ toUser, hash }) => {
    // @ts-ignore
    return new Promise((res, rej) => {
        const transporter = nodemailer_1.default.createTransport({
            host: "mail.privateemail.com",
            secure: true,
            port: 465,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PWD,
            },
        });
        const message = {
            from: `"GamerHub " <${process.env.MAIL_USER}>`,
            to: toUser.email,
            subject: "Welcome to GamerHub!",
            html: `
                <h3>Hello ${toUser.username}</h3>
                <p>Welcome to Gamerhub</p>
                <p>You just made the most important decision in your Gaming journey.</p>
                <p>Keep in touch with us on all our socials to stay updated with all our latest releases.</p>
                <p>Thank you.</p>
            `,
        };
        transporter.sendMail(message, (err, info) => {
            if (err) {
                console.log("🚀 ~ transporter.sendMail ~ err:", err);
                rej(err);
            }
            else {
                res(info);
            }
        });
    });
};
exports.sendConfirmationEmail = sendConfirmationEmail;
const sendSubscriptionMail = ({ toUser }) => {
    // @ts-ignore
    return new Promise((res, rej) => {
        const transporter = nodemailer_1.default.createTransport({
            service: "privateemail",
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PWD,
            },
        });
        const message = {
            from: process.env.MAIL_USER,
            // production
            to: toUser.email,
            // dev
            // to: process.env.MAIL_USER,
            subject: "Subscription - GAMER-HUB",
            html: `
                <h3>Hello ${toUser.username}</h3>
                <p>Your subscription has successfully been recorded, please enjoy the ride.</p>
                <p>Your subscription starts on ${new Date(toUser.startDate)}.</p>
                <p>Your subscription expires on ${new Date(toUser.endDate)}.</p>
                <p>Thank you.</p>

            `,
        };
        transporter.sendMail(message, (err, info) => {
            if (err) {
                rej(err);
            }
            else {
                res(info);
            }
        });
    });
};
exports.sendSubscriptionMail = sendSubscriptionMail;
//# sourceMappingURL=mailer.js.map