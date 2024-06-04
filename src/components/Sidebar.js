import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
  
    <aside className="sidebar">
      <nav>
        <ul>
          <li>All files</li>
          <li>Photos</li>
          <li>Shared</li>
          <li>Signatures</li>
          <li>File requests</li>
          <li>Deleted files</li>
        </ul>
      </nav>
      <div className="footer">
        <button>Get started</button>
      </div>
    </aside>
  );
};

export default Sidebar;
