import React from 'react';
import './HeaderContent.css'; // Import your CSS file for styling

function HeaderContent() {
  return (
    <div className="header-content">
      <div className="header-title">
        <h3>Dante Lucca - <span className="highlight">(King)</span></h3>
        <div className="actions">
          <button className="send-email">Send Email</button>
          <button className="edit">Edit</button>
          <button className="delete">Delete</button>
          <select className="dropdown"></select>
        </div>
      </div>
      <div className="label-value-pairs">
        <div className="pair">
          <div className="label">Title</div>
          <div className="value">SVP, Operation</div>
        </div>
        <div className="pair">
          <div className="label">Account Name</div>
          <div className="value">Dante Lucca</div>
        </div>
        <div className="pair">
          <div className="label">Phone</div>
          <div className="value">521236521</div>
        </div>
        <div className="pair">
          <div className="label">Email</div>
          <div className="value">DanteLucca13@mail.com</div>
        </div>
      </div>
    </div>
  );
}

export default HeaderContent;