import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li className="left"><FontAwesomeIcon icon={faAngleLeft} /></li>
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
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;