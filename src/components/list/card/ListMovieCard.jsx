import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import EmotionGauge from './EmotionGauge';
import { checkLike, handleLikeClick } from '@/utils/like';
import { checkScrape, handleScrapeClick } from "@/utils/scrape";

import './card.css'
import likeIcon from '@/assets/img/like_icon.svg'
import likeIconFilled from '@/assets/img/like_red.svg'
import bookmarkIcon from '@/assets/img/bookmark_icon.svg'
import bookmarkIconFilled from '@/assets/img/bookmark_yellow.svg'
import robotIcon from '@/assets/img/robot_icon.svg'

export default function ListMovieCard({id, likeCount, title, posterUrl, cast, reserRate ,emotionRating, aiReview}){
    const navigate = useNavigate();
    const [fillLike, setFillLike] = useState(false);
    const [fillBookmark, setFillBookmark] = useState(false);

    const handleLikeBtn = () => setFillLike(!fillLike);
    const handleBookmarkBtn = () => setFillBookmark(!fillBookmark);
    const handleLikeBtnClick = () => {;
        handleLikeClick('movie', id).then(data => { if(data) console.log('success!'); });
    };
    const handleBookmarkBtnClick = () => {
        handleScrapeClick('movie', id).then(data => { if(data) console.log('success!'); });
    };
    const handleCardClick = (e) => {
        if (e.target.tagName === 'IMG'){
            e.target.click();
        } else navigate('/movie/' + id);
    }

    useEffect(() => {
        checkLike('movie', id).then(data => {if (typeof(data) == 'boolean') setFillLike(data)});
        checkScrape('movie', id).then(data => {if (typeof(data) == 'boolean') setFillBookmark(data)});
    }, [id])

    const containerStyles = { minWidth: '500px', maxWidth: '530px', minHeight: '400px', display: 'flex', padding: '1rem 1rem', width: "fit-content", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2)", borderRadius: "10px", textAlign: 'center', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' };
    const btnContentsStyles = { marginRight: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' };
    const posterStyles = { width: '230px', minHeight: '330px', margin: '30px', borderRadius: '10px', backgroundColor: 'rgb(210, 210, 210)' };
    const btnAreaStyles = { display: 'flex', marginTop: '15px', flexDirection: 'row', alignItems: 'center' };
    const titleStyles = { margin: '25px 0', fontWeight: '600', fontSize:'24px', color: '#111827' }

    //Todo: 좋아요, 스크랩 반영해서 아이콘 색 바꾸기
    return(
        <div className="card" style={containerStyles} onClick={handleCardClick}>
            <img src={posterUrl} style={posterStyles}/>
            <div className='btn-contents' style={btnContentsStyles}>
                <div className="btn-area" style={btnAreaStyles}>
                    <span style={{fontSize: '14px', margin: '0 3px'}}>{likeCount}</span>
                    <img src={fillLike ? likeIconFilled : likeIcon} onClick={handleLikeBtnClick} onMouseOver={handleLikeBtn} onMouseOut={handleLikeBtn} style={{width: '25px', marginRight: '5px', cursor: "pointer"}} />
                    <img src={fillBookmark ? bookmarkIconFilled : bookmarkIcon} onClick={handleBookmarkBtnClick} onMouseOver={handleBookmarkBtn} onMouseOut={handleBookmarkBtn} style={{width: '25px', margin: '0 5px', cursor: "pointer"}} />
                    {aiReview ? <img src={robotIcon} style={{width: '30px', margin: '0 5px'}}/> : <></>}
                </div>
                <div className="contents" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <h3 style={titleStyles}>{title}</h3>
                    <div style={{color: '#6D7280', marginBottom: '30px', fontSize: '16px'}}>
                        <div>{reserRate}</div>
                        <div>{cast}</div>
                    </div>
                    <EmotionGauge emotionRating={emotionRating} />
                </div>
            </div>
        </div>
    )
}

ListMovieCard.propTypes = {
    id: PropTypes.number.isRequired,
    likeCount: PropTypes.string,
    title: PropTypes.string,
    posterUrl: PropTypes.string,
    cast: PropTypes.string,
    reserRate: PropTypes.string,
    emotionRating: PropTypes.number,
    aiReview: PropTypes.bool
}