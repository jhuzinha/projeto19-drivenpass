import { Router } from "express";
import * as wifiFunctions from '../controllers/wifiController.js';
import Validate from "../middlewares/joiValidate.js";
var wifiRouter = Router();
wifiRouter.post('/wifi/create', Validate('wifi'), wifiFunctions.createWifi);
wifiRouter.get('/wifi', wifiFunctions.getWifi);
wifiRouter["delete"]('/wifi/:id/delete', wifiFunctions.deleteWifi);
export default wifiRouter;
