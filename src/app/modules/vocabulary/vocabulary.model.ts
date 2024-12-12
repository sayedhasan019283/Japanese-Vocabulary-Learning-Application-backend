import { Schema, model } from 'mongoose';
import { IVocabulary } from './vocabulary.interface';

// Schema definition for the Vocabulary model
const VocabularySchema: Schema = new Schema<IVocabulary>(
  {
    word: { type: String, required: true }, // Word is mandatory
    pronunciation: { type: String, required: true }, // Pronunciation is mandatory
    meaning: { type: String, required: true }, // Meaning is mandatory
    whenToSay: { type: String, required: true }, // Context of usage is mandatory
    lessonNo: { type: Number, required: true }, // Lesson number is mandatory to establish association
    adminEmail: { type: String, required: true }, // Admin email is mandatory to track who added the word
  },
  { timestamps: true } // Automatically manage createdAt and updatedAt fields
);

// Creating the Vocabulary model from the schema
const VocabularyModel = model<IVocabulary>('Vocabulary', VocabularySchema);

// Exporting the model for use in other parts of the application
export default VocabularyModel;
