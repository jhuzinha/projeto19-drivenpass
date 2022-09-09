import { Router } from "express";

const safenoteRouter = Router();

safenoteRouter.post('/safenote/create')
safenoteRouter.get('/safenote/:id')
safenoteRouter.delete('/safenote/:id/delete')


export default safenoteRouter;