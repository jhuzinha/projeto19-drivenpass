import { Router } from "express";
import * as safeNotesFunctions from '../controllers/safeNotesController.js';
import Validate from "../middlewares/joiValidate.js";
var safenoteRouter = Router();
safenoteRouter.post('/safenote/create', Validate('safeNote'), safeNotesFunctions.createNotes);
safenoteRouter.get('/safenote', safeNotesFunctions.getNotes);
safenoteRouter["delete"]('/safenote/:id/delete', safeNotesFunctions.deleteNotes);
export default safenoteRouter;
