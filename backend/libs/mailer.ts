import nodemailer from "nodemailer";

interface IMailer {
  toUser: {
    id: string;
    email: string;
    username: string;
  };
  hash: string;
}
interface ISubscription {
  toUser: {
    id: string;
    email: string;
    username: string;
    plan: string;
    startDate: string;
    endDate: string;
  };
}
export const sendConfirmationEmail = ({ toUser, hash }: IMailer) => {
  // @ts-ignore
  return new Promise((res, rej) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PWD,
      },
    });

    const message = {
      from: process.env.GMAIL_USER,
      // production
      to: toUser.email,
      // dev
      // to: process.env.GMAIL_USER,
      subject: "Email confrimation - GAMER-HUB",
      html: `
                <h3>Hello ${toUser.username}</h3>
                <p>Welcome to the best online web3 game aggregator. Just one more step...</p>
                <p>To confirm your email, please follow this link: <a target="_" href="${process.env.DOMAIN}/confirm/email/${toUser.id}">Activate</a></p>
                <p>Thank you.</p>


            `,
    };

    transporter.sendMail(message, (err, info) => {
      if (err) {
        rej(err);
      } else {
        res(info);
      }
    });
  });
};

export const sendSubscriptionMail = ({ toUser }: ISubscription) => {
  // @ts-ignore
  return new Promise((res, rej) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PWD,
      },
    });

    const message = {
      from: process.env.GMAIL_USER,
      // production
      to: toUser.email,
      // dev
      // to: process.env.GMAIL_USER,
      subject: "Subscription - GAMER-HUB",
      html: `
                <h3>Hello ${toUser.username}</h3>
                <p>Your subscription has successfully been recorded, please enjoy the ride.</p>
                <p>Your subscription starts on ${new Date(
                  toUser.startDate
                )}.</p>
                <p>Your subscription expires on ${new Date(toUser.endDate)}.</p>
                <p>Thank you.</p>

            `,
    };

    transporter.sendMail(message, (err, info) => {
      if (err) {
        rej(err);
      } else {
        res(info);
      }
    });
  });
};
