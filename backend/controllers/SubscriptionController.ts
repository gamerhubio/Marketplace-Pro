import express from "express";
import { StatusCodes } from "http-status-codes";
import Subscriptions from "../models/SubscriptionModel";
import { sendSubscriptionMail } from "../libs/mailer";

interface ISubscription {
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
    let subscription: ISubscription | any = await Subscriptions.findOne({
      email: req.body.email,
    });
    //console.log(subscription);
    if (subscription) {
      // update Subscription
      subscription.email = req.body.email;
      subscription.username = req.body.username;
      subscription.plan = req.body.plan;
      subscription.endDate = req.body.endDate;
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
type ISub = {
  email: string;
  createdAt: Date;
  updatedAt: Date;
};

// check for any active subscription
export const checkExpiry = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { address } = req.params;

    // get user
    const subscription: ISub | any = await Subscriptions.findOne({
      email: address,
    });
    // tslint:disable-next-line:no-console
    // console.log(subscription);
    if (!subscription) {
      // return false
      res.status(StatusCodes.NOT_FOUND).json({ msg: false });
    } else {
      // calculate date difference
      const date1 = new Date(subscription.endDate);
      const date2 = Date.now();
      const diffTime = Date.now() - subscription.endDate;

      if (diffTime > 0) {
        // return false
        res.status(StatusCodes.OK).json({ msg: false });
      } else {
        // return true
        res.status(StatusCodes.OK).json({ msg: true });
      }
    }
  } catch (error) {
    // console.log(error)
    // throw error
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error);
  }
};
