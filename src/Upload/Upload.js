import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Upload() {
  const [value, setValue] = useState("");
  const onChange = () => {
    setValue();
  }

  return (
    <>
        {/* <ReactQuill
          theme="snow"
          placeholder="Start writing..."
          modules={{
            toolbar: {
              container: [
                [{ header: "1" }, { header: "2" }, { font: [] }],
                [{ size: [] }],
                ["bold", "italic", "underline", "strike", "blockquote"],
                [
                  { list: "ordered" },
                  { list: "bullet" },
                  { indent: "-1" },
                  { indent: "+1" },
                ],
                ["link", "image", "video"],
                ["code-block"],
                ["clean"],
              ],
            },
            clipboard: {
              matchVisual: false,
            },
          }}
          formats={[
            "header",
            "font",
            "size",
            "bold",
            "italic",
            "underline",
            "strike",
            "blockquote",
            "list",
            "bullet",
            "indent",
            "link",
            "image",
            "video",
            "code-block",
          ]}
          value={value}
          onChange={onChange}
        /> */}
        <input type="file"></input>
    </>
  );
}

export default Upload;

