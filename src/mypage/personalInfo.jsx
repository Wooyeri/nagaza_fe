import React from 'react';
import './PersonalInfo.css';

function PersonalInfo() {
  return (
    <div className="personal-info-container">
      <div className="profile-image">
        <img src="path/to/profile-placeholder.png" alt="Profile" />
      </div>
      <div className="profile-details">
        <p>이름</p>
        <p>ID</p>
        <p>email</p>
      </div>
      <button className="change-password-button">비밀번호 변경</button>
    </div>
  );
}

export default PersonalInfo;
