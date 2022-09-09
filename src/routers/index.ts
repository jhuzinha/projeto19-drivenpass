import { Router } from "express";
import cardRouter from "./cardRouter.js";
import userRouter from "./userRouter.js";
import wifiRouter from "./wifiRouter.js";
import credentialRouter from "./credentialRouter.js";
import safenoteRouter from "./safesNotesRouter.js";

const router = Router();

router.use(cardRouter)
router.use(userRouter)
router.use(wifiRouter)
router.use(credentialRouter)
router.use(safenoteRouter)

export default router;