import  express  from "express";
import validateRequest from "../../middlewares/validateRequest";
import { vocabularyValidation } from "./vocabulary.validation";
import { vocabularyController } from "./vocabulary.controller";
// import auth from "../../middlewares/auth";
// import { USER_ROLE } from "./user.constant";

const router = express.Router()

router.post(
    '/admin/vocabularies',
    validateRequest(vocabularyValidation.VocabularySchema),
    vocabularyController.createVocabulary
)
router.patch(
    '/admin/vocabularies/:id',
    vocabularyController.updateVocabulary
)
router.delete(
    '/admin/vocabularies/:id',
    vocabularyController.deleteVocabulary
)

export const vocabularyRoutes = router;