import PropTypes from 'prop-types';
import likeIcon from '@/assets/like_icon.svg'
import likeIconFilled from '@/assets/like_red.svg'
import bookmarkIcon from '@/assets/bookmark_icon.svg'
import bookmarkIconFilled from '@/assets/bookmark_yellow.svg'
import robot_icon from '@/assets/robot_icon.svg';
import './mylistDetail.css';
import { useEffect, useState } from 'react';

function ScrapDetail({ contents }) {
    const [desc, setDesc] = useState('');
    const [filLike, setFillLike] = useState(false);
    const [fillBookmark, setFillBookmark] = useState(false);

    const handleLikeIcon = () => setFillLike(!filLike);
    const handleBookmarkIcon = () => setFillBookmark(!fillBookmark);

    useEffect(() => {
        var str = 'Get from BE...'
        if(str.length > 70) setDesc(str.slice(0, 71) + '...');
        else setDesc(str)
    }, [])

  return (
    <div className="mylist-post-container">
        <div className='mylist-post'>
            <img src={contents.posterUrl} alt='representative image' className="mylist-post-image" />
            <div className="mylist-post-content">
                <h2 className="mylist-post-title">{contents.title ? contents.title : contents.name}</h2>
                <div className="mylist-post-icons">
                    <span>{contents.likes}</span>
                    <img src={filLike ? likeIconFilled : likeIcon} onMouseOver={handleLikeIcon} onMouseOut={handleLikeIcon} style={{cursor: "pointer"}} alt='heart-icon' />
                    <img src={fillBookmark ? bookmarkIconFilled : bookmarkIcon} onMouseOver={handleBookmarkIcon} onMouseOut={handleBookmarkIcon} style={{cursor: "pointer"}} alt='bookmark-icon' />
                    {<img className='robot' src={robot_icon} alt='robot-icon' />}{/**TODO!! 요약 유무 반영 */}
                </div>
                <div className="description">
                    {desc}{/**TODO: 요약 기입*/}
                </div>
            </div>
        </div>
        <div className='divider'></div>
    </div>
  );
}

// Add PropTypes validation
ScrapDetail.propTypes = {
    contents: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    title: PropTypes.string,
    likes: PropTypes.string,
    posterUrl: PropTypes.string,
  })
};

export default ScrapDetail;
