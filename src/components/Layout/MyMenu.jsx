import { useState } from 'react';
import './MyMenu.css';

export default function MyMenu() {
  const [showPersonalInfo, setShowPersonalInfo] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleMenuClick = (menu) => {
    if (menu === 'personal-info') {
      setShowPersonalInfo(true);
    }
    setShowDropdown(false);
  };

  return (
    <div className="mypage-container">
      <header className="mypage-header">
        <div className="logo">
          <img src="path/to/logo.png" alt="Logo" />
        </div>
        <div className="user-icon" onClick={toggleDropdown}>
          <img src="path/to/user-icon.png" alt="User" />
          {showDropdown && (
            <div className="dropdown-menu">
              <ul>
                <li onClick={() => handleMenuClick('personal-info')}>Personal Info</li>
                <li>좋아요</li>
                <li>스크랩</li>
                <li>
                  Dark theme <input type="checkbox" />
                </li>
                <li>Log Out</li>
              </ul>
            </div>
          )}
        </div>
      </header>
      <main className="mypage-main">
        {showPersonalInfo ? (
          <></>
        ) : (
          <div className="profile-summary">
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
        )}
      </main>
      <footer className="mypage-footer">
        <p>우아한형제들·삼성서울병원 @ 2024.08 SK&apos;s-project·사이트이름</p>
      </footer>
    </div>
  );
}
