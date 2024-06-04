import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faQuestionCircle, faThLarge } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="header">
      <input type="text" placeholder="Search" className="search-bar" />
      <div className="header-buttons">
        <button><FontAwesomeIcon icon={faThLarge} /></button>
        <button><FontAwesomeIcon icon={faBell} /></button>
        <button><FontAwesomeIcon icon={faQuestionCircle} /></button>
        <button className="profile">UN</button>
      </div>
    </header>
  );
};

export default Header;
