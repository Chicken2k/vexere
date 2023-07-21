// controllers dùng để tương tác đc người dùng gữi lên theo
// phương thức và url thì tạo router
const express = require("express");
const { Station } = require("../models/index");
const { checkExist } = require("../middlewares/validations/checkExist");
const { authenticate } = require("../middlewares/auth/authenticate");
const { authorize } = require("../middlewares/auth/authorize");

// tạo 1 routes station
const stationRouter = express.Router();
const {
  createStation,
  getAllStation,
  getDetailStation,
  updateStation,
  deleteStation,
} = require("../controllers/station.controllers");

stationRouter.post("/", authenticate, authorize, createStation);
stationRouter.get("/", getAllStation);
stationRouter.get("/:id", getDetailStation);
stationRouter.put("/:id", checkExist(Station), updateStation);
stationRouter.delete(
  "/:id",
  authenticate,
  authorize,
  checkExist(Station),
  deleteStation
);
module.exports = stationRouter;
