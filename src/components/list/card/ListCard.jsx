import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import EmotionGauge from "./EmotionGauge"
import { checkLike, handleLikeClick } from '@/utils/like';
import './card.css'
import likeIcon from '@/assets/like_icon.svg'
import likeIconFilled from '@/assets/like_red.svg'
import bookmarkIcon from '@/assets/bookmark_icon.svg'
import bookmarkIconFilled from '@/assets/bookmark_yellow.svg'
import robotIcon from '@/assets/robot_icon.svg'

export default function ListCard({id, category, likeCount, name, posterUrl, optional, emotionRating, aiReview}){
    const navigate = useNavigate();
    const [fillLike, setFillLike] = useState(false);
    const [fillBookmark, setFillBookmark] = useState(false);

    const handleLikeBtn = () => setFillLike(!fillLike);
    const handleBookmarkBtn = () => setFillBookmark(!fillBookmark);
    const handleLikeBtnClick = () => {;
        handleLikeClick(category, id).then(data => { if(data) console.log('success!'); });
    };
    const handleBookmarkBtnClick = () => {
        //
    };
    const handleCardClick = (e) => {
        if (e.target.tagName === 'IMG'){
            e.target.click();
        } else navigate(`/${category}/${id}`);
    }

    useEffect(() => {
        checkLike(category, id).then(data => {if (typeof(data) == 'boolean') setFillLike(data)});
    }, [category, id])

    const containerStyles = { display: 'flex', padding: '1rem 0.3rem', width: "400px", minHeight: "410px", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2)", borderRadius: "10px", textAlign: 'center', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' };
    const posterStyles = { width: '330px', minHeight: '200px', borderRadius: '10px', backgroundColor: 'rgb(210, 210, 210)', border: 'none' };
    const btnAreaStyles = { display: 'flex', marginTop: '15px', flexDirection: 'row', alignItems: 'center' };
    const titleStyles = {margin: '15px 0', fontWeight: '600', fontSize:'24px', color: '#111827'}

    //Todo: 좋아요, 스크랩 반영해서 아이콘 색 바꾸기
    return(
        <div className="card" style={containerStyles} onClick={handleCardClick}>
            <img src={posterUrl} style={posterStyles}/>
            <div className="btn-area" style={btnAreaStyles}>
                <span style={{fontSize: '14px', margin: '0 3px'}}>{likeCount}</span>
                <img src={fillLike ? likeIconFilled : likeIcon} onClick={handleLikeBtnClick} onMouseOver={handleLikeBtn} onMouseOut={handleLikeBtn} style={{width: '25px', marginRight: '5px', cursor: "pointer"}} />
                <img src={fillBookmark ? bookmarkIconFilled : bookmarkIcon} onClick={handleBookmarkBtnClick} onMouseOver={handleBookmarkBtn} onMouseOut={handleBookmarkBtn} style={{width: '25px', margin: '0 5px', cursor: "pointer"}} />
                {aiReview ? <img src={robotIcon} style={{width: '30px', margin: '0 5px'}}/> : <></>}
            </div>
            <div className="contents" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h3 style={titleStyles}>{name}</h3>
                <div style={{color: '#6D7280', marginBottom: '10px', fontSize: '16px'}}>
                    <div style={{fontFamily:'Microsoft GothicNeo'}}>{optional}</div>
                </div>
                <EmotionGauge emotionRating={emotionRating} />
            </div>
        </div>
    )
}
ListCard.propTypes = {
    id: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    likeCount: PropTypes.string,
    name: PropTypes.string,
    posterUrl: PropTypes.string,
    optional: PropTypes.string,
    emotionRating: PropTypes.number,
    aiReview: PropTypes.bool
}