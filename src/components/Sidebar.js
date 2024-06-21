import React, { useState } from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleDown } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <nav>
        <ul>
          <li className="left" onClick={toggleSidebar}>
            <FontAwesomeIcon icon={isCollapsed ? faAngleLeft : faAngleDown} />
          </li>
          {!isCollapsed && (
            <>
              <li className="hover">Notes</li>
              <li>Deals</li>
              <li>Email</li>
              <li>Products</li>
              <li>Campaigns</li>
              <li>Cases</li>
              <li>Quotes</li>
              <li>Sales Order</li>
              <li>Purchase Orders</li>
              <li>Emails</li>
              <li>Invoice</li>
            </>
          )}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
