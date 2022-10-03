const User = require("../models/user");

const getAllUsers = async (req, res) => {
  try {
    const userDetails = await User.find({});
    res.status(200).json({ data: userDetails });
  } catch (err) {
    res.status(500).send("Error occured...");
  }
};
const getSingleUser = async (req, res) => {
  try {
    const user = await User.find({ firstName: req.params.name });
    res.status(200).json({ user });
  } catch (err) {
    res.status(500).send("Sorry an error occured");
  }
};
module.exports = {
  getAllUsers,
  getSingleUser,
};
