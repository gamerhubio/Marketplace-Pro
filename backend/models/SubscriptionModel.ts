import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Please provide an email"],
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please provide a valid email",
      ],
      unique: true,
    },
    username: {
      type: String,
      required: [true, "Please provide a username"],
      unique: true,
    },
    plan: {
      type: Number,
      required: [true, "Please add a subscription plan"],
    },
    endDate: {
      type: Number,
      required: [true, "Please add date"],
    },
  },
  { timestamps: true }
);

// const User = mongoose.model("User", userSchema);

export default mongoose.model("Subscriptions", subscriptionSchema);
