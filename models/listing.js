const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
  {
    review: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    userName: String,
    userAvatar: String,
  },
  {
    timestamps: true,
  }
);

const reservationSchema = new Schema(
  {
    startDate: {
      type: Date,
      required: true,
      min: new Date().toISOString().split("T")[0],
    },
    numberOfDays: {
      type: Number,
      min: 1,
      required: true,
    },
    host: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const listingSchema = new Schema({
  airport: {
    type: String,
    required: true,
  },
  manufacturer: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  seats: {
    type: Number,
    min: 1,
    max: 6,
    required: true,
  },
  ifrRating: {
    type: Boolean,
  },
  imgUrl: {
    type: String,
    required: false,
  },
  host: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  userName: String,
  userAvatar: String,
  review: [reviewSchema],
  reservations: [reservationSchema],
});

module.exports = mongoose.model("Listing", listingSchema);
