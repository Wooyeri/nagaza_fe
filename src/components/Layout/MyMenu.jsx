import './MyMenu.css';

export default function MyMenu() {

  return (
    <div className='mymenu-list-container'>
      <h1>마이페이지</h1>
      <ul className="mymenu-list">
        <li className='color'><div>개인 정보</div></li>
        <div className='divider'></div>
        <li className='color'><div>좋아요</div></li>
        <div className='divider'></div>
        <li className='color'><div>스크랩</div></li>
        <div className='divider'></div>
        <li><div>다크 테마</div></li>
        <div className='divider'></div>
        <li className='color'><div>로그아웃</div></li>
      </ul>
    </div>
  );
}
