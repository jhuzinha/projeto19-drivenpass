import { Router } from "express";

const userRouter = Router();

userRouter.post('/signup')
userRouter.post('/signin')

export default userRouter;