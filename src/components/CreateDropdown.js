import React, { useState } from 'react';
import './CreateDropdown.css';
import { FaFolder, FaFileAlt, FaChartBar, FaFileExcel, FaLink, FaUpload, FaFileSignature } from 'react-icons/fa';
import { MdDriveFileMove } from 'react-icons/md';

const CreateDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [subMenu, setSubMenu] = useState(null);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const toggleSubMenu = (menu) => setSubMenu(subMenu === menu ? null : menu);

  return (
    <div className="dropdown">
      <button className="dropdown-btn" onClick={toggleDropdown}>Create</button>
      {isOpen && (
        <div className="dropdown-content">
          <div className="dropdown-item" onClick={() => toggleSubMenu('folder')}>
            <FaFolder /> Folder
          </div>
          <div className="dropdown-item" onClick={() => toggleSubMenu('document')}>
            <FaFileAlt /> Document
            {subMenu === 'document' && (
              <div className="sub-menu">
                <div className="sub-menu-item">Dropbox Paper doc</div>
                <div className="sub-menu-item">Dropbox Paper template</div>
                <div className="sub-menu-item">Microsoft Word</div>
                <div className="sub-menu-item">Google Docs</div>
              </div>
            )}
          </div>
          <div className="dropdown-item">
            <FaChartBar /> Presentation
          </div>
          <div className="dropdown-item">
            <FaFileExcel /> Spreadsheet
          </div>
          <div className="dropdown-item">
            <FaLink /> Web shortcut
          </div>
          <div className="dropdown-item">
            <FaUpload /> Upload
          </div>
          <div className="dropdown-item">
            <FaFileSignature /> Send file request
          </div>
          <div className="dropdown-item">
            <MdDriveFileMove /> Import from Google Drive
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateDropdown;
