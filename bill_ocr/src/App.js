import React, { useState } from "react";
import axios from "axios";
import Tesseract from "tesseract.js";

export default function App(props) {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");

  const handleChange = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  return (
    <div className="container">
      <div className="custom-file">
        <input
          type="file"
          onChange={handleChange}
          value={fileName}
          className="custom-file-input"
          id="customFile"
        />
        <label className="custom-file-label" htmlFor="customFile">
          Choose file
        </label>
      </div>
    </div>
  );
}
