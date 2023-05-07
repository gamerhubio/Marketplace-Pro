
import mongoose from "mongoose";

const gameSchema = new mongoose.Schema({

  name: {
    type: String,
    required: [true, "Please provide name"],
  },
  chain: {
    type: String,
    required: [true, "Please add chain"],
  },
  image: {
    type: String,
    required: [true, "Please add image"],
  },
  categories: {
    type: Map,
    of: Number,
    default: {
       "p2e":true,
        "action":true,
        "metaverse":true
    }
  },

});

export default mongoose.model("Games", gameSchema);
