import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faFileWaveform, faFileImage, faFileWord, faFileVideo, faUpload, faArrowUp, faGem, faListDots, faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faContactCard } from '@fortawesome/free-regular-svg-icons';
import './MainContent.css';
import './tablest';

function MainContent() {
  const [activeTab, setActiveTab] = useState('Tasks');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <main className="main-content">
      <section className="box contact-info">
        <h2><FontAwesomeIcon icon={faContactCard} /> Contact Information</h2>
        <div className="contact-details">
          <div className="detail-item"><strong>Contact Owner</strong> <span>Dante Lucca</span></div>
          <div className="detail-item"><strong>Lead Source</strong> <span>Trade Show</span></div>
          <div className="detail-item"><strong>Account Name</strong> <span>King sample</span></div>
          <div className="detail-item"><strong>Contact Name</strong> <span>Crish Merrish</span></div>
          <div className="detail-item"><strong>Email</strong> <span>Kingsample@mail.com</span></div>
          <div className="detail-item"><strong>Vendor Name</strong> <span>--</span></div>
          <div className="detail-item"><strong>Phone</strong> <span>521236521</span></div>
          <div className="detail-item"><strong>Title</strong> <span>Quality engineer</span></div>
          <div className="detail-item"><strong>Mobile</strong> <span>521236521</span></div>
          <div className="detail-item"><strong>Mobile</strong> <span>521236521</span></div>
        </div>
      </section>

      <section className="deals-next-action">
        <section className="box deals">
          <h3><span><FontAwesomeIcon icon={faGem} /></span> Deals</h3>
          <div className="deal">
            <span>King</span>
            <span className="amount">$25,852,211</span>
          </div>
          <div className="deal">
            <span>Identify Decision</span>
            <span className=""> 19 May, 1996</span>
          </div>
        </section>
        <section className="box next-action">
          <h3>Next Action</h3>
          <div className="action today">
            <span>Today</span>
            <span>Register Webinar</span>
          </div>
          <div className="action future">
            <span>May 12</span>
            <span>Manager Approval</span>
          </div>
        </section>
      </section>

      <section className="box file-uploads">
        <h3><span><FontAwesomeIcon icon={faUpload} /> File Uploads</span></h3>
        <div className="file-actions">
          <button className="download-all-button">Download all</button>
          <button className="upload-button"><FontAwesomeIcon icon={faCloudArrowUp} /> Upload</button>
        </div>
        <table>
          <thead>
            <tr>
              <th><input type="checkbox" /></th>
              <th>File Name <FontAwesomeIcon icon={faArrowUp} /></th>
              <th>File size <FontAwesomeIcon icon={faArrowUp} /></th>
              <th>Date Uploaded <FontAwesomeIcon icon={faArrowUp} /></th>
              <th>Last Updated <FontAwesomeIcon icon={faArrowUp} /></th>
              <th>Uploaded By <FontAwesomeIcon icon={faArrowUp} /></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="checkbox" /></td>
              <td><FontAwesomeIcon icon={faFilePdf} /> Tech requirements.pdf</td>
              <td>200 KB</td>
              <td>Jan 4, 2024</td>
              <td>Jan 4, 2024</td>
              <td>Olivia Rhye</td>
              <td><button className="more-button">More</button></td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td><FontAwesomeIcon icon={faFileImage} /> Dashboard screenshot.jpg</td>
              <td>720 KB</td>
              <td>Jan 4, 2024</td>
              <td>Jan 4, 2024</td>
              <td>Phoenix Baker</td>
              <td><button className="more-button">More</button></td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td><FontAwesomeIcon icon={faFileVideo} /> Dashboard recording.mp4</td>
              <td>16 MB</td>
              <td>Jan 2, 2024</td>
              <td>Jan 2, 2024</td>
              <td>Lana Steiner</td>
              <td><button className="more-button">More</button></td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td><FontAwesomeIcon icon={faFileWord} /> UX Design Guidelines.docx</td>
              <td>400 KB</td>
              <td>Jan 8, 2024</td>
              <td>Jan 8, 2024</td>
              <td>Candice Wu</td>
              <td><button className="more-button">More</button></td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td><FontAwesomeIcon icon={faFileWaveform} /> Dashboard interaction.aep</td>
              <td>12 MB</td>
              <td>Jan 6, 2024</td>
              <td>Jan 6, 2024</td>
              <td>Natali Craig</td>
              <td><button className="more-button">More</button></td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="box condenses">
        <h3>Condenses</h3>
        <div className="no-record">
          <span>No Record Found</span>
          <button className="add-condenses-button">Add Condenses</button>
        </div>
      </section>

      <section className="box deals1">
        <h3><span><FontAwesomeIcon icon={faGem} /></span> Deals</h3>
        <table>
          <thead>
            <tr>
              <th><input type="checkbox" /></th>
              <th>Deal Name <FontAwesomeIcon icon={faArrowUp} /></th>
              <th>Date <FontAwesomeIcon icon={faArrowUp} /></th>
              <th>Status <FontAwesomeIcon icon={faArrowUp} /></th>
              <th>Stage <FontAwesomeIcon icon={faArrowUp} /></th>
              <th>Type <FontAwesomeIcon icon={faArrowUp} /></th>
              <th>Probability <FontAwesomeIcon icon={faArrowUp} /></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="checkbox" /></td>
              <td>King</td>
              <td>Jan 6, 2024</td>
              <td><span className="status active">Active</span></td>
              <td>Identify Decision Maker</td>
              <td>New Business</td>
              <td>60%</td>
            </tr>
          </tbody>
        </table>
        <button className="add-deal-button1">Add New</button>
      </section>

      <section className="box open-activities">
        <h3><span><FontAwesomeIcon icon={faListDots} /></span> Open Activities</h3>
        <div className="activities-tabs">
          <button
            className={`tab ${activeTab === 'Tasks' ? 'active' : ''}`}
            onClick={() => handleTabClick('Tasks')}
          >
            Tasks
          </button>
          <button
            className={`tab ${activeTab === 'Meetings' ? 'active' : ''}`}
            onClick={() => handleTabClick('Meetings')}
          >
            Meetings
          </button>
          <button
            className={`tab ${activeTab === 'Calls' ? 'active' : ''}`}
            onClick={() => handleTabClick('Calls')}
          >
            Calls
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <th><input type="checkbox" /></th>
              <th>Task Owner <FontAwesomeIcon icon={faArrowUp} /></th>
              <th>Title <FontAwesomeIcon icon={faArrowUp} /></th>
              <th>Status <FontAwesomeIcon icon={faArrowUp} /></th>
              <th>Priority <FontAwesomeIcon icon={faArrowUp} /></th>
              <th>Date <FontAwesomeIcon icon={faArrowUp} /></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="checkbox" /></td>
              <td>Drew Cano</td>
              <td>Follow up on meeting</td>
              <td><span className="status overdue">Overdue</span></td>
              <td>High</td>
              <td>Jan 2, 2024</td>
            </tr>
          </tbody>
        </table>
        <button className="add-activity-button">Add Activity</button>
      </section>
    </main>
  );
}

export default MainContent;
