import { TLesson } from './lesson.interface';
import LessonModel from './lesson.model';

const createLessonIntoDB = async (Payload: TLesson) => {
  try {
    // Validate Payload
    if (!Payload || !Payload.lessonName || !Payload.lessonNumber) {
      throw new Error(
        'Invalid Payload: Lesson Name and Lesson Number are required.',
      );
    }
    // Create Lesson in DB
    const result = await LessonModel.create(Payload);
    // Handle Unexpected Failure
    if (!result) {
      throw new Error('Failed to create the lesson in the database.');
    }

    return result;
  } catch (error) {
    return error;
  }
};

const getAllLessonFromDB = async () =>{
    try {
        const result = LessonModel.find({})
        if (!result) {
            throw new Error("didn't get all lesson from DB ")
        }
        return result
    } catch (error) {
        return error
    }
}

const deleteLessonFromDB = async (lessonId : string) =>{
    try {
        const result = await LessonModel.findByIdAndDelete(lessonId)
        if (!result) {
            throw new Error("Lesson Is Not Deleted")
        } 
        return result;
    } catch (error) {   
        return error
    }
}


const updateLessonInDB = async (lessonId: string, payload : Partial<TLesson>) => {
    try {
        const result = await LessonModel.findByIdAndUpdate(lessonId, payload, {new : true});
        if (!result) {
            throw new Error("Update Not Successful")
        }
        return result;
    } catch (error) {
        return error
    }
};

export const lessonService = {
    createLessonIntoDB,
    getAllLessonFromDB,
    deleteLessonFromDB,
    updateLessonInDB
}
