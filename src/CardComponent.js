import React from 'react';
import './CardComponent.css';

const CardComponent = () => {
  return (
    <div className="card">
      <div className="card-header">
        <span className="card-id">CAM-11</span>
        <div className="card-user">
          <img 
            src="https://i.pravatar.cc/50" // Replace this with the actual profile picture URL
            alt="User Avatar"
            className="user-avatar"
          />
        </div>
      </div>
      <div className='main-box'>      
      <h2 className="card-title">Conduct Security Vulnerability Assessment</h2>
      </div>
      <div className="card-footer">
        <div className="icon">
          <span className='tag-icon'>!</span>

        </div>
        <div className='tag-box'>
            {/* <span className='tag-circle'>.</span> */}
            <span className="tag">Feature Request</span>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
