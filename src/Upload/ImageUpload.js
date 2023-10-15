import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setSelectedImage(imageFile);
  };

  const handleImageUpload = async () => {
    const cloudinaryUploadPreset = 'YOUR_CLOUDINARY_UPLOAD_PRESET';
    const cloudinaryUrl = 'https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload';

    if (selectedImage) {
      const formData = new FormData();
      formData.append('file', selectedImage);
      formData.append('upload_preset', cloudinaryUploadPreset);

      try {
        const response = await axios.post(cloudinaryUrl, formData);
        setUploadedImage(response.data.secure_url);
      } catch (error) {
        console.error('Error uploading image to Cloudinary:', error);
      }
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={handleImageUpload}>Upload Image</button>
      {uploadedImage && <img src={uploadedImage} alt="Uploaded" />}
    </div>
  );
};

export default ImageUpload;
