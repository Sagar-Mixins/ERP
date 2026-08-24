import React, { useState } from "react";
import type { DragEvent, ChangeEvent } from "react";

interface ImageDropzoneProps {
  image: File | null;
  setImage: (file: File | null) => void;
}

export const ImageDropzone: React.FC<ImageDropzoneProps> = ({ image, setImage }) => {
  const [isDragActive, setIsDragActive] = useState<boolean>(false);

  const handleDrag = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragActive(true);
    } else if (e.type === "dragleave") {
      setIsDragActive(false);
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith("image/")) {
        setImage(file);
      }
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const removeImage = () => {
    setImage(null);
  };

  return (
    <div className="w-full">
      {!image ? (
        <div onDragEnter={handleDrag} onDragOver={handleDrag} onDragLeave={handleDrag} onDrop={handleDrop}
          style={{ border: `2px dashed ${isDragActive ? "#007bff" : "#ccc"}`, borderRadius: "8px", padding: "40px", textAlign: "center", cursor: "pointer", backgroundColor: isDragActive ? "#f0f7ff" : "#fafafa", transition: "all 0.2s ease" }}
          onClick={() => document.getElementById("file-upload")?.click()} >
          <input id="file-upload" type="file" accept="image/*" style={{ display: "none" }} onChange={handleChange} />
          <p style={{ margin: 0 }}>Drag & drop your image here, or click to browse</p>
        </div>
      ) : (
        <div style={{ textAlign: "center", position: "relative", display:"grid", justifyContent:"center" }}>
          <img src={URL.createObjectURL(image)} alt="Preview" style={{ maxWidth: "100%", maxHeight: "250px", borderRadius: "8px" }}/>
          <button onClick={removeImage} style={{ marginTop: "10px", padding: "6px 12px", backgroundColor: "#dc3545", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer", }}>
            Remove Image
          </button>
        </div>
      )}
    </div>
  );
};
