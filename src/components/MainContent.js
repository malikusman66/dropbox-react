import React from 'react';
import './MainContent.css';
import CreateDropdown from './CreateDropdown';

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="toolbar">
        <CreateDropdown />
        <button>Edit image</button>
        <button>Edit PDF</button>
      </div>
      <div className="file-area">
        <div className="file-controls">
          <button>Recents</button>
          <button>Starred</button>
        </div>
        <div className="upload-area">
          <p>Drop files here to upload</p>
          <button>Upload</button>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
