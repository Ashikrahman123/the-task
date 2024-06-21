import React, { useState } from 'react';
import './Header.css';
import userAvatar from './assets/user-avatar.jpg';
import bellIcon from './assets/bell-icon.png';
import questionIcon from './assets/question-icon.png';
import settingsIcon from './assets/settings-icon.png';
import starIcon from './assets/star-icon.png';
import dotsIcon from './assets/dots-icon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import pyIcon from './assets/pyramid-icon.png';

const Header = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const [showDotsMenu, setShowDotsMenu] = useState(false);

    const handleMenuClick = (menu) => {
        if (menu === 'dots') {
            setShowDotsMenu(!showDotsMenu); // Toggle dots menu visibility
            setActiveMenu(null); // Close other menus
        } else {
            setActiveMenu(activeMenu === menu ? null : menu); // Toggle other menu items
            setShowDotsMenu(false); // Close dots menu if another menu is clicked
        }
    };

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
                <div className="menu-item" onClick={() => handleMenuClick('dots')}>
                    <img src={dotsIcon} alt="Dots Icon" className="icon1" />
                    {showDotsMenu && (
                        <div className="pop-up">
                            <div className="search-container">
                        <FontAwesomeIcon icon={faSearch} className="search-icon" />
                        <input type="text" className="search-input" />
                    </div>
                            <p>Option 1 for Dots Menu</p>
                            <p>Option 2 for Dots Menu</p>
                            <p>Option 3 for Dots Menu</p>
                        </div>
                    )}
                </div>
                {['Home', 'Task', 'Settings', 'Leads', 'Accounts', 'Contacts', 'Campaigns', 'Market', 'Files', 'Operations', 'Invoices'].map((item, index) => (
                    <div className="menu-item" key={index}>
                        <a href="#" onClick={() => handleMenuClick(item)}>{item}</a>
                        {activeMenu === item && (
                            <div className="pop-up">
                                <p>Option 1 for {item}</p>
                                <p>Option 2 for {item}</p>
                                <p>Option 3 for {item}</p>
                            </div>
                        )}
                    </div>
                ))}
                <div className="menu-item more-menu" onClick={() => handleMenuClick('More')}>
                    More <FontAwesomeIcon icon={faAngleDown} className="down-icon" />
                    {activeMenu === 'More' && (
                        <div className="pop-up">
                            <p>Option 1 for More</p>
                            <p>Option 2 for More</p>
                            <p>Option 3 for More</p>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;