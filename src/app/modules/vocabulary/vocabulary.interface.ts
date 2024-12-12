// Type definition for the Vocabulary model
export type IVocabulary = {
    word: string; // The vocabulary word
    pronunciation: string; // Phonetic pronunciation of the word
    meaning: string; // The meaning of the word
    whenToSay: string; // Context or situation where the word is used
    lessonNo: number; // Reference to the lesson number associated with this word
    adminEmail: string; // Email of the admin who added the word
    createdAt?: Date; // Timestamp for when the document was created
    updatedAt?: Date; // Timestamp for when the document was last updated
  };