import './Mypage.css';

export default function MyPage() {
  return (
    <div className="personal-info-container">
      <div className="profile-image">
        <img src="" alt="Profile" />
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