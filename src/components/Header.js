import React from 'react';
import './Header.css';
import userAvatar from './assets/user-avatar.jpg';
import bellIcon from './assets/bell-icon.png'; // replace with the appropriate icon path
import questionIcon from './assets/question-icon.png'; // replace with the appropriate icon path
import settingsIcon from './assets/settings-icon.png'; // replace with the appropriate icon path
import starIcon from './assets/star-icon.png'; // replace with the appropriate icon path
import dotsIcon from './assets/dots-icon.png'; // replace with the appropriate icon path
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import pyIcon from './assets/pyramid-icon.png';


function Header() {
    return (
        <header className="header">
            <div className="top-header">
            <div className="left-section">
            <img src={pyIcon} alt="Dots Icon" className="icon" />
                    <div className="logo">Cloud Share</div>
                </div>
                <div className="center-section">
                    <div className="search-container">
                        <FontAwesomeIcon icon={faSearch} className="search-icon" />
                        <input type="text" placeholder="Search product" className="search-input" />
                    </div>
                </div>
                <div className="right-section">
                    <img src={starIcon} alt="Star Icon" className="icon" />
                    <img src={questionIcon} alt="Question Icon" className="icon" />
                    <img src={settingsIcon} alt="Settings Icon" className="icon" />
                    <img src={bellIcon} alt="Bell Icon" className="icon" />
                    <div className="user-info">
                        <img src={userAvatar} alt="User Avatar" className="avatar" />
                    </div>
                </div>
            </div>
            <nav className="bottom-header">
            <a href="#">
    <img src={dotsIcon} alt="Dots Icon" className="icon1" />
</a>                <a href="#" className="menu-item">Home</a>
                <a href="#" className="menu-item">Task</a>
                <a href="#" className="menu-item">Settings</a>
                <a href="#" className="menu-item">Leads</a>
                <a href="#" className="menu-item">Accounts</a>
                <a href="#" className="menu-item">Contacts</a>
                <a href="#" className="menu-item">Campaigns</a>
                <a href="#" className="menu-item">Market</a>
                <a href="#" className="menu-item">Files</a>
                <a href="#" className="menu-item">Operations</a>
                <a href="#" className="menu-item">Invoices</a>
                <div className="menu-item more-menu">
                    More <FontAwesomeIcon icon={faAngleDown} className="down-icon" />
                </div>
            </nav>
        </header>
    );
}

export default Header;