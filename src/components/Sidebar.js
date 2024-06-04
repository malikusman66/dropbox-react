import React, { useState } from 'react';
import './Sidebar.css';
import { FaFolder, FaImages, FaSign, FaBars } from 'react-icons/fa';

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menu) => {
    if (activeMenu === menu) {
      setActiveMenu(null);
    } else {
      setActiveMenu(menu);
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar-item" onClick={() => toggleMenu('allFiles')}>
        <FaBars /> All Files
      </div>
      <div className="sidebar-item" onClick={() => toggleMenu('photos')}>
        <FaImages /> Photos
        {activeMenu === 'photos' && (
          <div className="submenu">
            <div className="submenu-item">Albums</div>
            <div className="submenu-item">Tags</div>
          </div>
        )}
      </div>
      <div className="sidebar-item" onClick={() => toggleMenu('shared')}>
        <FaFolder /> Shared
        {activeMenu === 'shared' && (
          <div className="submenu">
            <div className="submenu-item">Folders</div>
            <div className="submenu-item">Files</div>
          </div>
        )}
      </div>
      <div className="sidebar-item" onClick={() => toggleMenu('signatures')}>
        <FaSign /> Signatures
        {activeMenu === 'signatures' && (
          <div className="submenu">
            <div className="submenu-item">Pending</div>
            <div className="submenu-item">Completed</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
