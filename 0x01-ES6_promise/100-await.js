import { uploadPhoto, createUser } from './utils';

export default asyncUploadUser = async () => {
  try {
    return { photo: await uploadPhoto(), user: await createUser() };
  } catch (error) {
    return { photo: null, user: null };
  }
};
