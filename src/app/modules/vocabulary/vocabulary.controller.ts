import { NextFunction, Request, Response } from "express"
import { vocabularyService } from "./vocabulary.service";

const createVocabulary = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const payload = req.body;
        console.log(payload)
        const result = await vocabularyService.createVocabularyFromDB(payload);
        if (!result) {
            throw new Error("Create vocabulary Unsuccessful"); 
        }
        res.status(201).json({
            statusCode: 200,
            success: true,
            message: "vocabulary created successfully",
            data: result
          });
    } catch (error) {
        next(error)
    }
}

const updateVocabulary = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        const payload = req.body;
        const result = await vocabularyService.updateVocabularyFromDB(id, payload)
        if (!result) {
            throw new Error("Update Failed");  
        }
        res.status(200).json({
            statusCode: 200,
            success: true,
            message: "vocabulary updated successfully",
            data: result
          });
    } catch (error) {
        next(error)
    }
}

const deleteVocabulary = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id
        const result = await vocabularyService.deleteVocabularyFromDB(id)
        if (!result) {
            throw new Error("delete vocabulary Unsuccessful");
        }
        res.status(201).json({
            statusCode: 200,
            success: true,
            message: "vocabulary delete successfully",
            data: result
          });
    } catch (error) {
        next(error)
    }
}

export const vocabularyController ={
    createVocabulary,
    updateVocabulary,
    deleteVocabulary,
}