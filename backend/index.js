const express = require("express");
const app = express();
const Users = require("./routes/users.js");
require("dotenv").config();
// middlewares
app.use(express.json());
app.use("/api/v1/users/", Users);
// server running
const startServer = () => {
  try {
    app.listen(
      process.env.PORT,
      console.log(`server running on port ${process.env.PORT}`)
    );
  } catch (err) {
    console.log(err);
  }
};
startServer();
