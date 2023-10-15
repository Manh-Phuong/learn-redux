import { useEffect, useRef } from "react";

const UploadWidget = () => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "manhphuong",
        uploadPreset: "manhphuong",
      },
      function (error, result) {
        if (!error && result && result.event === "success") {
          // Khi tải lên thành công
          const imageUrl = result.info.secure_url;
          console.log("Liên kết ảnh:", imageUrl);

          // Thực hiện các xử lý khác với liên kết ảnh (nếu cần)
        } else {
          // Xử lý lỗi tải lên (nếu có)
          console.error("Lỗi tải lên ảnh:", error);
        }
      }
    );
    console.log(cloudinaryRef.current);
  }, []);

  return (
    <div>
      <button onClick={() => widgetRef.current.open()}>Upload</button>
    </div>
  );
};

export default UploadWidget;
