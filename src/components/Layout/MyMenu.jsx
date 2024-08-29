import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ThemeContext } from '@/common/Context';
import './MyMenu.css';
import person from '@/assets/img/person.svg';
import like from '@/assets/img/like_gray.svg';
import bookmark from '@/assets/img/bookmark_gray.svg';
import lightbulb from '@/assets/img/lightbulb.svg';
import logout from '@/assets/img/logout.svg';

export default function MyMenu({ showDropdown, setShowDropdown }) {
  const { toggleDarkMode } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [darkModeOn, setDarkModeOn] = useState(false);

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
            <div className={`slider ${darkModeOn ? 'on' : 'off'}`} onClick={() => {setDarkModeOn(!darkModeOn); toggleDarkMode()}}><div className='ball'></div></div>
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
