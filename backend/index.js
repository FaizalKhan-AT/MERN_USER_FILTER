const express = require("express");
const app = express();
const connectDb = require("./db/connect");
const Users = require("./routes/users");
require("dotenv").config();
const cors = require("cors");
// middlewares
app.use(cors());
app.use(express.json());
app.use("/api/v1/users/", Users);
// server running
const startServer = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(
      process.env.PORT,
      console.log(
        `server running on port ${process.env.PORT} and also db is running`
      )
    );
  } catch (err) {
    console.log(err);
  }
};
startServer();
