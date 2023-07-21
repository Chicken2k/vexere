const express = require("express");
const stationRouter = require("./station.routers");
const userRouter = require("./user.router");
const rootRouter = express.Router();

rootRouter.use("/station", stationRouter);
rootRouter.use("/user", userRouter);
module.exports = rootRouter;
