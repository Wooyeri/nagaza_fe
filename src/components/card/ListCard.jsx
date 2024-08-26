import PropTypes from 'prop-types';
import { useState, useEffect } from "react"
import './card.css'
import likeIcon from '@/assets/like_icon.svg'
import scrapIcon from '@/assets/scrap_icon.svg'
import robotIcon from '@/assets/robot_icon.svg'

export default function ListCard(){
    const styles = {
        display: 'flex',
        padding: '15px 0',
        width: "400px",
        boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        borderRadius: "10px",
        textAlign: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }

    const [likes, setLikes] = useState(0);
    const [title, setTitle] = useState('');
    const [address, setAddress] = useState('');
    const [rating, setRating] = useState(0);
    const [hasAiReview, setAiReview] = useState(false);

    //Todo: DB에서 받아온 값으로 설정하기
    const emotion_rating = 100;
    useEffect(()=>{
        setLikes(123);
        setTitle('Title');
        setAddress('서울특별시 중구');
        setRating(5);
        setAiReview(true);
    }, []);
    //Todo: 이미지 넣기, 좋아요, 스크랩 반영해서 아이콘 색 바꾸기
    return(
        <div className="card" style={styles}>
            <img style={{height: '150px', border: '1px solid black'}}/>
            <div className="btn-area" style={{display: 'flex', marginTop: '15px', flexDirection: 'row', alignItems: 'center'}}>
                <span style={{fontSize: '14px', margin: '0 3px'}}>{likes}</span>
                <img src={likeIcon} style={{width: '25px', marginRight: '5px'}} />
                <img src={scrapIcon} style={{width: '25px', margin: '0 5px'}} />
                {hasAiReview ? <img src={robotIcon} style={{width: '30px', margin: '0 5px'}}/> : <></>}
            </div>
            <div className="contents">
                <h3 style={{margin: '15px 0', fontWeight: '600', fontSize:'24px', color: '#111827'}}>{title}</h3>
                <div style={{color: '#6D7280', marginBottom: '10px', fontSize: '16px'}}>
                    <div style={{fontFamily:'Microsoft GothicNeo'}}>{address}</div>
                    <div>{rating}</div>
                </div>
                <EmotionGauge emotion_rating={emotion_rating} />
            </div>
        </div>
    )
}

function EmotionGauge({emotion_rating}){
    const [position, setPosition] = useState(0);
    const [emoji, setEmoji] = useState('');
    useEffect(()=>{
        setPosition((emotion_rating - 5.54) + '%');

        if (emotion_rating >= 0 && emotion_rating < 20){
            setEmoji('😡');
        } else if (emotion_rating < 40){
            setEmoji('😞');
        } else if (emotion_rating < 60){
            setEmoji('😐');
        } else if (emotion_rating < 80){
            setEmoji('😊');
        } else if (emotion_rating <= 100){
            setEmoji('😍');
        }
    }, [])

    const gaugeBar = {
        display: 'flex',
        width: '250px',
        height: '30px',
        background: 'linear-gradient(90deg, rgba(255, 0, 0, 0.45) 0%, rgba(251, 141, 13, 0.45) 27%, rgba(250, 255, 21, 0.45) 50.91%, rgba(191, 255, 54, 0.45) 71.69%, rgba(8, 255, 3, 0.45) 92.47%)',
        borderRadius: '8px',
    };
    return(
        <div style={{...gaugeBar, flexDirection:'column', justifyContent: 'center'}}>
            <div style={{marginLeft: position, fontSize: '20px', width: 'fit-content'}}>{emoji}</div>
        </div>
    )
}
EmotionGauge.propTypes = {
    emotion_rating: PropTypes.number
}