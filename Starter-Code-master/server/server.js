// libraries consts
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

// file consts
const connect = require("./database/mongoDb.js");

// router consts
const userRouter = require("./routes/userRoutes.js");

// app
const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());
app.use("/auth", userRouter);

connect(); //you will have to edit this in ./databse/mongoDb.js

app.listen(port, () => console.log(`server started on port ${port}`));
