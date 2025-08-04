import axios from "axios";

export const uploadImages = async (uploadFile) => {
  const formData = new FormData();
  formData.append("file", uploadFile);
  formData.append("upload_preset", "BookMyshow");
  const cloudName = "dl46mmq0f";

  const response = await axios.post(
    `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
    formData
  );

  return response.data.secure_url;
};
