import { Router } from "express";

const cardRouter = Router();

cardRouter.post('/card/create')
cardRouter.get('/cards/:id')
cardRouter.delete('/card/:id/delete')


export default cardRouter;