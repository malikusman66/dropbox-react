import React, { useState } from 'react';
import './CreateDropdown.css';
import { FaFolder, FaFileAlt, FaChartBar, FaFileExcel, FaLink, FaUpload, FaFileSignature, FaPen } from 'react-icons/fa';
import { MdDriveFileMove } from 'react-icons/md';

const menuItems = [
  {
    title: 'Folder',
    icon: <FaFolder />,
    subMenu: ['Folder', 'Shared folder', 'Automated folder']
  },
  {
    title: 'Document',
    icon: <FaFileAlt />,
    subMenu: ['Dropbox Paper doc', 'Dropbox Paper template', 'Microsoft Word', 'Google Docs']
  },
  {
    title: 'Presentation',
    icon: <FaChartBar />,
    subMenu: ['Google Slides', 'Microsoft PowerPoint']
  },
  {
    title: 'Spreadsheet',
    icon: <FaFileExcel />,
    subMenu: ['Google Sheets', 'Microsoft Excel']
  },
  {
    title: 'Web shortcut',
    icon: <FaLink />
  },
  {
    title: 'Upload',
    icon: <FaUpload />
  },
  {
    title: 'Send file request',
    icon: <FaFileSignature />
  },
  {
    title: 'Import from Google Drive',
    icon: <MdDriveFileMove />
  },
  {
    title: 'Edit',
    icon: <FaPen />,
    subMenu: ['Edit PDF', 'Edit Image']
  },
  {
    title: 'Sign',
    icon: <FaPen />,
    subMenu: ['Sign Document']
  }
];

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
          {menuItems.map((item, index) => (
            <div key={index} className="dropdown-item" onClick={() => item.subMenu && toggleSubMenu(item.title)}>
              {item.icon} {item.title}
              {subMenu === item.title && (
                <div className="sub-menu">
                  {item.subMenu.map((subItem, subIndex) => (
                    <div key={subIndex} className="sub-menu-item">
                      {subItem}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CreateDropdown;
