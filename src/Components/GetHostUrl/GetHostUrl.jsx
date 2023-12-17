import { getStorage, ref, uploadBytes } from "firebase/storage";
const GetHostUrl = async (file) => {
  const storage = getStorage();
  const storageRef = ref(storage, `files/${file.name}`);
  await uploadBytes(storageRef, file);
  const url = `https://firebasestorage.googleapis.com/v0/b/${
    import.meta.env.VITE_projectId
  }.appspot.com/o/files%2F${file.name}?alt=media`;
  return url;
};

export default GetHostUrl;
