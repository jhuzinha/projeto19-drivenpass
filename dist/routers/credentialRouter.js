import { Router } from "express";
import Validate from "../middlewares/joiValidate.js";
import * as credentialFunctions from '../controllers/credentialController.js';
var credentialRouter = Router();
credentialRouter.post('/credential/create', Validate('credential'), credentialFunctions.createCredential);
credentialRouter.get('/credential', credentialFunctions.getCredential);
credentialRouter["delete"]('/credential/:id/delete', credentialFunctions.deleteCredential);
export default credentialRouter;
