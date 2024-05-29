import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_logo">Logo</div>
      <ul className="sidebar_menu">
        <li>All files</li>
        <li>Photos</li>
        <li>Shared</li>
        <li>Signatures</li>
        <li>File requests</li>
        <li>Deleted files</li>
      </ul>
    </div>
  );
}

export default Sidebar;
