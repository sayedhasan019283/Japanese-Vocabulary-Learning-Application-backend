import { Schema, model } from 'mongoose';
import { TLesson } from './lesson.interface';

// Schema definition for the Lesson model
const LessonSchema: Schema = new Schema<TLesson>(
  {
    lessonName: { type: String, required: true }, // Lesson name is mandatory
    lessonNumber: { type: Number, unique: true, required: true }, // Lesson number must be unique and is required
    vocabularyCount: { type: Number, default: 0 }, // Default value for vocabulary count is 0
  },
  { timestamps: true } // Automatically manage createdAt and updatedAt fields
);

// Creating the Lesson model from the schema
const LessonModel = model<TLesson>('Lesson', LessonSchema);

// Exporting the model for use in other parts of the application
export default LessonModel;
