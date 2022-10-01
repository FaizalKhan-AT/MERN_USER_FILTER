const express = require("express");
const router = express.Router();
const { getAllUsers } = require("../controllers/users.js");
router.route("/").get(getAllUsers);

module.exports = router;
