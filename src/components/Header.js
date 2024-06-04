import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <input type="text" placeholder="Search" className="search-bar" />
      <div className="header-buttons">
        <button>Invite members</button>
        <button>Notifications</button>
        <button>Settings</button>
      </div>
      <button className="profile">UN</button>
    </header>
  );
};

export default Header;
