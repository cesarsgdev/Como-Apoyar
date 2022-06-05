const mongoose = require("mongoose");
const { Schema } = mongoose;
const uuid = require("uuid");

const disastersSchema = new Schema(
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
      minlength: 8,
      maxlength: 50,
    },

    description: {
      type: String,
      required: true,
      trim: true,
      minlength: 1,
    },
  },
  { timestamps: true }
);

const disastersModel = mongoose.model("disasters", disastersSchema);

module.exports = disastersModel;
