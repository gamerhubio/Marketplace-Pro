import mongoose, { Schema } from "mongoose";

const favoriteSchema = new mongoose.Schema({

  title: {
    type: String,
    required:[true, "Please provide title"]
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'Users',
    required: [true, "Please provide user"],
  },
 category: {
    type: String,
    enum: {
      values: ['games', 'nfts', 'merchendise', 'events','streamed-videos'],
      message: '{VALUE} is not supported',
    },

  },

},{timestamps: true} );

export default mongoose.model("Favorites", favoriteSchema);
