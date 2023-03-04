import express from "express";
import login from "../controllers/auth/login.controller.js";
import register from "../controllers/auth/register.controller.js";

const authRouter = express.Router()

authRouter.post("/register", register)
authRouter.post("/login", login)


export default authRouter;