import { Document } from 'mongoose';

export type TLesson = Document & {
  lessonName: string; // Name of the lesson
  lessonNumber: number; // Unique number assigned to each lesson
  vocabularyCount?: number; // Count of vocabulary words in the lesson (optional, default is 0)
  createdAt?: Date; // Timestamp for when the document was created
  updatedAt?: Date; // Timestamp for when the document was last updated
};


