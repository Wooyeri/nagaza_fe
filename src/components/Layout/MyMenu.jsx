import { useState } from 'react';
import PropTypes from 'prop-types';
import './MyMenu.css';
import person from '@/assets/person.svg';
import like from '@/assets/like_gray.svg';
import bookmark from '@/assets/bookmark_gray.svg';
import lightbulb from '@/assets/lightbulb.svg';
import logout from '@/assets/logout.svg';
import { useNavigate } from 'react-router-dom';

export default function MyMenu({ showDropdown, setShowDropdown }) {
  const navigate = useNavigate();
  const [darkTheme, setDarkTheme] = useState(false);

  const handleLogout = () => {
    sessionStorage.removeItem('jwtToken');
    navigate('/');
    setShowDropdown(false);
    window.location.reload();
  }

  return (
    <div className='mymenu-list-container' hidden={ !showDropdown }>
      <h1>마이페이지</h1>
      <ul className="mymenu-list">
        <li className='color'>
          <div className='option'>
            <img src={person} alt='person-icon' />
            <div className='text' onClick={() => {navigate('/mypage/personal'); setShowDropdown(false)}}>개인 정보</div>
          </div>
        </li>
        <div className='divider'></div>
        <li className='color'>
          <div className='option'>
            <img src={like} alt='heart-icon' />
            <div className='text' onClick={() => {navigate('/mypage/mylists/liked'); setShowDropdown(false)}}>좋아요</div>
          </div>
        </li>
        <div className='divider'></div>
        <li className='color'>
          <div className='option'>
            <img src={bookmark} alt='bookmark-icon' />
            <div className='text' onClick={() => {navigate('/mypage/mylists/saved'); setShowDropdown(false)}}>스크랩</div>
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
            <div className='text' onClick={handleLogout}>로그아웃</div>
          </div>
        </li>
      </ul>
    </div>
  );
}
MyMenu.propTypes = {
  showDropdown: PropTypes.bool,
  setShowDropdown: PropTypes.func
}
