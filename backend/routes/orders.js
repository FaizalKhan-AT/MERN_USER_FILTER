const express = require("express");
const router = express.Router();
const { getAllOrders } = require("../controllers/orders");

router.route("/:date").get(getAllOrders);

module.exports = router;
