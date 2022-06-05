const mongoose = require("mongoose");
const { Schema } = mongoose;
const uuid = require("uuid");

const centersSchema = new Schema(
  {
    _id: {
      type: String,
      default: uuid.v4,
    },

    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 8,
      maxlength: 50,
    },

    address: {
      type: String,
      required: true,
      trim: true,
      minlength: 10,
      maxlength: 50,
    },

    city: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 50,
    },
    state: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 50,
    },

    hours: { type: [{ type: String }], default: ["24 hours"] },

    notes: {
      type: String,
      required: false,
      trim: true,
      default: "",
    },
  },
  { timestamps: true }
);

const centersModel = mongoose.model("centers", centersSchema);

module.exports = centersModel;
