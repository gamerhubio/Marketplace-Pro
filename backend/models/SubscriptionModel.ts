import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "Users",
      required: [true, "Please provide user"],
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
