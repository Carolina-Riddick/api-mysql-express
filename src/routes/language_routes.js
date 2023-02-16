import {Router} from 'express';
import {methods as languageController} from "./../controllers/language_controller.js"

const router = Router();

//GET METHOD
router.get("/", languageController.getLanguage)

// GET METHOD with PARAMS
router.get("/:id", languageController.getLanguageId)

//POST METHOD
router.post("/", languageController.addLanguage)

//PUT METHOD
router.put("/:id", languageController.updateLanguage)

//DELETE METHOD
router.delete("/:id", languageController.deleteLanguage)

export default router;