import express from "express";
import { deleteUser, login, logout, register } from "../controllers/user.controller.js";
import { authentication } from "../middlewares/user.middleware.js";

const userRouter = express.Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.post("/logout", logout);
userRouter.delete("/:id", authentication, deleteUser);


export default userRouter;