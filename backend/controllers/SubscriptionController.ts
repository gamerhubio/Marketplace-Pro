import express from "express";
import { StatusCodes } from "http-status-codes";
import Subscriptions from "../models/SubscriptionModel";
import { sendSubscriptionMail } from "../libs/mailer";

interface Subscription {
  id: string;
  email: string;
  username: string;
  plan: string;
  startDate: string;
  endDate: string;
}
// create user
export const recordSubscription = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    // get subscription
    let subscription: Subscription | any = await Subscriptions.findOne({
      email: req.body.email,
    });
    if (subscription) {
      // update Subscription
      subscription.email = req.body.email;
      subscription.username = req.body.username;
      subscription.plan = req.body.plan;
      await subscription.save();

      const data = {
        id: subscription._id,
        email: subscription.email,
        username: subscription.username,
        plan: subscription.plan,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
      };
      // send home
      await sendSubscriptionMail({ toUser: data });

      res.status(StatusCodes.CREATED).json({ msg: "subscription recorded" });
    } else {
      // create subscription
      subscription = await Subscriptions.create({ ...req.body });
      const data = {
        id: subscription._id,
        email: subscription.email,
        username: subscription.username,
        plan: subscription.plan,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
      };
      // send email
      await sendSubscriptionMail({ toUser: data });

      // send dashboard
      res.status(StatusCodes.CREATED).json({ msg: "subscription recorded" });
    }
  } catch (error) {
    // throw error
    res.status(StatusCodes.BAD_REQUEST).send(error);
  }
};
