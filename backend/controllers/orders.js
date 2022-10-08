const User = require("../models/user");

const getAllOrders = async (req, res) => {
  console.log(req.params.date);
  try {
    const orders = await User.find({ "orders.date": req.params.date });
  } catch (err) {
    res.status(500).status(404).send("Something went wrong.. server error");
  }
};

module.exports = { getAllOrders };
