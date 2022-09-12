import { Router } from "express";
import * as cardFunctions from '../controllers/cardController.js';
import Validate from "../middlewares/joiValidate.js";
var cardRouter = Router();
cardRouter.post('/card/create', Validate('card'), cardFunctions.createCard);
cardRouter.get('/card', cardFunctions.getCard);
cardRouter["delete"]('/card/:id/delete', cardFunctions.deleteCard);
export default cardRouter;
