import { useState } from 'react';
import './MyMenu.css';
import person from '@/assets/person.svg';
import like from '@/assets/like_gray.svg';
import bookmark from '@/assets/bookmark_gray.svg';
import lightbulb from '@/assets/lightbulb.svg';
import logout from '@/assets/logout.svg';

export default function MyMenu() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className='mymenu-list-container'>
      <h1>마이페이지</h1>
      <ul className="mymenu-list">
        <li className='color'>
          <div className='option'>
            <img src={person} alt='person-icon' />
            <div className='text'>개인 정보</div>
          </div>
        </li>
        <div className='divider'></div>
        <li className='color'>
          <div className='option'>
            <img src={like} alt='heart-icon' />
            <div className='text'>좋아요</div>
          </div>
        </li>
        <div className='divider'></div>
        <li className='color'>
          <div className='option'>
            <img src={bookmark} alt='bookmark-icon' />
            <div className='text'>스크랩</div>
          </div>
        </li>
        <div className='divider'></div>
        <li style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
          <div className='option'>
            <img src={lightbulb} alt='lightbulb-icon' />
            <div className='text'>다크 테마</div>
          </div>
          <div className='slider-wrapper'>
            <div className={`slider ${darkTheme ? 'on' : 'off'}`} onClick={() => {setDarkTheme(!darkTheme)}}><div className='ball'></div></div>
          </div>
        </li>
        <div className='divider'></div>
        <li className='color'>
          <div className='option'>
            <img src={logout} alt='logout-icon'/>
            <div className='text'>로그아웃</div>
          </div>
        </li>
      </ul>
    </div>
  );
}
