import React from 'react';
import './MainContent.css';

function MainContent() {
  const handleFileUpload = (e) => {
    const files = e.target.files;
    console.log(files);
  };

  return (
    <div className="main-content">
      <div className="main-content_header">
        <button>Create</button>
        <button>Upload or drop</button>
        <button>Create folder</button>
        <button>Edit PDF</button>
      </div>
      <div className="main-content_body">
        <div className="upload-area">
          <input type="file" id="fileUpload" onChange={handleFileUpload} multiple />
          <label htmlFor="fileUpload">Drop files here to upload</label>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
