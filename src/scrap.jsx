import './scrap.css';

function MainLayout() {
  return (
    <div className="main-layout">
      <header className="header">
        <div className="logo">logoipsum</div>
        <div className="user-icon">👤</div>
      </header>
      <div className="content">
        <div className="icons">
          <div className="icon">
            <span role="img" aria-label="like">💜</span>
            <p>좋아요</p>
          </div>
          <div className="icon">
            <span role="img" aria-label="scribble">📋</span>
            <p>스크랩</p>
          </div>
        </div>
        <div className="folders">
          <div className="folder">
            <span role="img" aria-label="folder">📁</span>
            <p>나의 영화 목록</p>
          </div>
          <div className="folder">
            <span role="img" aria-label="folder">📁</span>
            <p>나의 장소 목록</p>
          </div>
          <div className="folder">
            <span role="img" aria-label="folder">📁</span>
            <p>나의 식음료 목록</p>
          </div>
          <div className="folder">
            <span role="img" aria-label="folder">📁</span>
            <p>나의 전시 목록</p>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>Some footer text here</p>
      </footer>
    </div>
  );
}

export default MainLayout;
