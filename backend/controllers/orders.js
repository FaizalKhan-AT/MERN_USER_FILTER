const User = require("../models/user");

const getAllOrders = async (req, res) => {
  try {
    const all = await User.find({});
    let odrs = [];
    let [key] = req.params.date.split("T");
    all.forEach((user) => {
      let or = user.orders.filter((o) =>
        o.date.toISOString().split("T")[0].includes(key)
      );
      odrs.push(...or);
    });
    res.json({ data: odrs });
  } catch (err) {
    res
      .status(500)
      .status(404)
      .send(
        " Coudn't find orders You were looking. Something went wrong.. server error"
      );
  }
};

module.exports = { getAllOrders };
