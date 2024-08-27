import { useNavigate } from 'react-router-dom';
import './mainpage.css';

function MainPage() {
  const navigate = useNavigate();

  return (
    <div className="main-container">
      <header className="main-header">
        <div className="logo"> 
          <img src="path/to/logo.png" alt="Logo" />
        </div>
        <div className="auth-buttons">
          <button className="auth-button" onClick={() => navigate('/signup')}>SignUp</button>
          <button className="auth-button" onClick={() => navigate('/login')}>Login</button>
        </div>
      </header>
      <main className="main-content">
        <h1>사이트이름</h1>
        <p>분야별 리뷰 AI 요약시스템</p>
        <div className="categories">
          <div className="category">
            <img src="path/to/movie-icon.png" alt="영화" />
            <p>영화</p>
          </div>
          <div className="category">
            <img src="path/to/hotel-icon.png" alt="숙소" />
            <p>숙소</p>
          </div>
          <div className="category">
            <img src="path/to/food-icon.png" alt="식음료" />
            <p>식음료</p>
          </div>
          <div className="category">
            <img src="path/to/exhibit-icon.png" alt="전시" />
            <p>전시</p>
          </div>
        </div>
      </main>
      <footer className="main-footer">
        <p>우아한형제들·삼성서울병원 @ 2024.08 SK&apos;s-project·사이트이름</p>
      </footer>
    </div>
  );
}

export default MainPage;
