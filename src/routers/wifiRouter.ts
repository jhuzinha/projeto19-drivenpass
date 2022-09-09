import { Router } from "express";

const wifiRouter = Router();

wifiRouter.post('/wifi/create')
wifiRouter.get('/wifi/:id')
wifiRouter.delete('/wifi/:id/delete')


export default wifiRouter;