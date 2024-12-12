import { z } from 'zod';

const LessonSchema = z.object({
  body: z.object({
    lessonName: z.string().min(1, 'Lesson name is required'),
    lessonNumber: z.number().int().positive('Lesson number must be a positive integer'),
    vocabularyCount: z.number().int().min(0, 'Vocabulary count cannot be negative').optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
});

const UpdateLessonValidationSchema = z.object({
  body: z.object({
    lessonName: z.string().min(1, 'Lesson name is required').optional(),
    lessonNumber: z.number().int().positive('Lesson number must be a positive integer').optional(),
    vocabularyCount: z.number().int().min(0, 'Vocabulary count cannot be negative').optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  }).partial()
});

export const lessonValidation = {
  LessonSchema,
  UpdateLessonValidationSchema
};
