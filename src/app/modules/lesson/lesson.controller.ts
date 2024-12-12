import { NextFunction, Request, Response } from "express";
import { lessonService } from "./lesson.service";

const createLesson = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
       const lessonData = req.body;
       const result = await lessonService.createLessonIntoDB(lessonData);
       if (!result) {
        throw new Error('User Not Created successfully')
       }
       res.status(201).json({
        statusCode: 200,
        success: true,
        message: "lesson created successfully",
        data: result
      });
    } catch (error) {
        next(error); 
    }
};

const getAllLesson = async (req: Request, res: Response, next: NextFunction) =>{
    try {
        const result = await lessonService.getAllLessonFromDB();
        if (!result) {
            throw new Error("didn't get all lesson ")
        }
        res.status(200).json({
            statusCode: 200,
            success: true,
            message: "lesson get successfully",
            data: result
          });
    } catch (error) {
        next(error)
    }
}

const deleteLesson = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const lessonId = req.params.id;
        const result = await lessonService.deleteLessonFromDB(lessonId)
        if (!result) {
            throw new Error("Delete Unsuccessful");
            
        }
        res.status(200).json({
            statusCode: 200,
            success: true,
            message: "deleted successfully",
            data: result
          });
    } catch (error) {
        next(error)
    }
}

const updateLesson = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const lessonId = req.params.id;
        const payload = req.body;
        const result = await lessonService.updateLessonInDB(lessonId, payload)
        if (!result) {
            throw new Error("Update Not Successful")
        }
        res.status(200).json({
            statusCode: 200,
            success: true,
            message: "Update successfully",
            data: result
          });
    } catch (error) {
        next(error)
    }
}

export const lessonController = {
    createLesson,
    getAllLesson,
    deleteLesson,
    updateLesson
}