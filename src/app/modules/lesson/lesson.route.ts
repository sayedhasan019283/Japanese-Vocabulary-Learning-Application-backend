import  express  from "express";
import validateRequest from "../../middlewares/validateRequest";
import { lessonValidation } from "./lesson.validation";
import { lessonController } from "./lesson.controller";
// import auth from "../../middlewares/auth";
// import { USER_ROLE } from "./user.constant";

const router = express.Router()

router.post(
    '/admin/lessons',
    validateRequest(lessonValidation.LessonSchema),
    lessonController.createLesson
)
router.get(
    '/admin/lessons',
    lessonController.getAllLesson
)
router.delete(
    '/admin/lessons/:id',
    lessonController.deleteLesson
)
router.patch(
    '/admin/lessons/:id',
    lessonController.updateLesson
)

export const lessonRoutes = router;