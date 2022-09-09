import { Router } from "express";

const credentialRouter = Router();

credentialRouter.post('/credential/create')
credentialRouter.get('/credential/:id')
credentialRouter.delete('/credential/:id/delete')


export default credentialRouter;