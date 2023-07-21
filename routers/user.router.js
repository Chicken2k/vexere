const express = require("express");
const { register,login } = require("../controllers/user.controllers");
const userRouter = express.Router();

userRouter.post("/register", register);
userRouter.post("/login", login);

//dest là đường dẫn cần lưu

module.exports = userRouter;
