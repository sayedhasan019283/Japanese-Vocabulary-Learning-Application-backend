import { IVocabulary } from './vocabulary.interface';
import VocabularyModel from './vocabulary.model';

const createVocabularyFromDB = async (payload: IVocabulary) => {
  try {
    const result = await VocabularyModel.create(payload);
    if (!result) {
      throw new Error('Create vocabulary Unsuccessful');
    }
    return result;
  } catch (error) {
    return error;
  }
};

const updateVocabularyFromDB = async (
  id: string,
  payload: Partial<IVocabulary>,
) => {
  try {
    const result = await VocabularyModel.findByIdAndUpdate(id, payload, {
      new: true,
    });
    if (!result) {
        throw new Error("Update Failed");  
    }
    return result
  } catch (error) {
    return error;
  }
};

const deleteVocabularyFromDB = async (id: string) => {
  try {
    const result = await VocabularyModel.findByIdAndDelete(id);
    if (!result) {
      throw new Error('Delete Unsuccessful');
    }
    return result;
  } catch (error) {
    return error;
  }
};

export const vocabularyService = {
  createVocabularyFromDB,
  updateVocabularyFromDB,
  deleteVocabularyFromDB,
};
