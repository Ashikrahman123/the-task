import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf,faFileWaveform, faFileImage, faFileWord, faFileVideo, faUpload, faArrowUp, faGem, faListDots, faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faContactCard } from '@fortawesome/free-regular-svg-icons';
import './MainContent.css';

function MainContent() {
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
        <h3><span><FontAwesomeIcon icon={faUpload} />  File Uploads</span></h3>
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
    </main>
  );
}

export default MainContent;