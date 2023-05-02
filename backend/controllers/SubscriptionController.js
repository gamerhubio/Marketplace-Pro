
const { StatusCodes } = require("http-status-codes")
const Subscriptions =  require("../models/SubscriptionModel")
const { sendSubscriptionMail } = require("../libs/mailer");


//create user
 const recordSubscription = async (req, res) => {
    try {
      //get subscription
        let subscription = await Subscriptions.findOne({ email: req.body.email });
        if (subscription) {
            //update Subscription
            subscription.email = req.body.email
            subscription.username = req.body.username
            subscription.plan = req.body.plan
            await subscription.save();

            const data = {
                id:subscription._id,
                email: subscription.email,
                username: subscription.username,
                plan: subscription.plan,
                startDate: req.body.startDate,
                endDate:req.body.endDate
            }
             //send home
            await sendSubscriptionMail({ toUser: data})
    
           res.redirect(StatusCodes.TEMPORARY_REDIRECT, '/')
        } else {
             //create subscription
             subscription = await Subscriptions.create({ ...req.body });
             const data = {
                id:subscription._id,
                email: subscription.email,
                username: subscription.username,
                plan: subscription.plan,
                startDate: req.body.startDate,
                endDate:req.body.endDate
            }
             //send email
            await sendSubscriptionMail({ toUser: data})
    
            //send home
            res.redirect(StatusCodes.TEMPORARY_REDIRECT, '/')
        }
   
   
  } catch (error) {
    //throw error
    res.status(StatusCodes.BAD_REQUEST).send(error);
  }
};

module.exports = {recordSubscription}