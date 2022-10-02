const mongoose = require("mongoose");

const user = mongoose.Schema({
  customerId: { type: Number, required: true },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  orders: [
    {
      orderID: {
        type: Number,
        required: true,
      },
      amount: {
        type: Number,
        required: true,
      },
      date: {
        type: Date,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("user", user);
