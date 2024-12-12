import { z } from 'zod';

const VocabularySchema = z.object({
  body: z.object({
    word: z.string().min(1, 'Word is required'),
    pronunciation: z.string().min(1, 'Pronunciation is required'),
    meaning: z.string().min(1, 'Meaning is required'),
    whenToSay: z.string().min(1, 'Context of usage is required'),
    lessonNo: z.number().int().positive('Lesson number must be a positive integer'),
    adminEmail: z.string().email('Invalid email address'),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
});

const UpdateVocabularyValidationSchema = z.object({
  body: z.object({
    word: z.string().min(1, 'Word is required').optional(),
    pronunciation: z.string().min(1, 'Pronunciation is required').optional(),
    meaning: z.string().min(1, 'Meaning is required').optional(),
    whenToSay: z.string().min(1, 'Context of usage is required').optional(),
    lessonNo: z.number().int().positive('Lesson number must be a positive integer').optional(),
    adminEmail: z.string().email('Invalid email address').optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  }).partial()
});

export const vocabularyValidation = {
  VocabularySchema,
  UpdateVocabularyValidationSchema
};
