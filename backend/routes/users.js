const express = require("express");
const router = express.Router();
const { getAllUsers, getSingleUser } = require("../controllers/users.js");

router.route("/").get(getAllUsers);
router.route("/:name").get(getSingleUser);
module.exports = router;
