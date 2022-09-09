import { Router } from "express";
import { loginUser, registerUser } from "../controllers/userController.js";
import Validate from "../middlewares/joiValidate.js";

const userRouter = Router();

userRouter.post('/signup', Validate('register'), registerUser)
userRouter.post('/signin', Validate('login'), loginUser)

export default userRouter;