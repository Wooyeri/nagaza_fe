import PropTypes from 'prop-types';
import './card.css'
import EmotionGauge from "./EmotionGauge"
import likeIcon from '@/assets/like_icon.svg'
import bookmarkIcon from '@/assets/bookmark_icon.svg'
import robotIcon from '@/assets/robot_icon.svg'

export default function ListCard({likes, title, poster_url, location, rating, emotion_rating, ai_review}){
    const styles = {
        display: 'flex',
        padding: '15px 0',
        width: "400px",
        minHeight: "410px",
        boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        borderRadius: "10px",
        textAlign: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }

    //Todo: 좋아요, 스크랩 반영해서 아이콘 색 바꾸기
    return(
        <div className="card" style={styles}>
            <img src={poster_url} style={{width: '330px', minHeight: '200px', borderRadius: '10px', backgroundColor: 'rgb(210, 210, 210)', border: 'none'}}/>
            <div className="btn-area" style={{display: 'flex', marginTop: '15px', flexDirection: 'row', alignItems: 'center'}}>
                <span style={{fontSize: '14px', margin: '0 3px'}}>{likes}</span>
                <img src={likeIcon} style={{width: '25px', marginRight: '5px'}} />
                <img src={bookmarkIcon} style={{width: '25px', margin: '0 5px'}} />
                {ai_review ? <img src={robotIcon} style={{width: '30px', margin: '0 5px'}}/> : <></>}
            </div>
            <div className="contents">
                <h3 style={{margin: '15px 0', fontWeight: '600', fontSize:'24px', color: '#111827'}}>{title}</h3>
                <div style={{color: '#6D7280', marginBottom: '10px', fontSize: '16px'}}>
                    <div style={{fontFamily:'Microsoft GothicNeo'}}>{location}</div>
                    <div>{rating}</div>
                </div>
                <EmotionGauge emotion_rating={emotion_rating} />
            </div>
        </div>
    )
}
ListCard.propTypes = {
    likes: PropTypes.string,
    title: PropTypes.string,
    poster_url: PropTypes.string,
    location: PropTypes.string,
    rating: PropTypes.string,
    emotion_rating: PropTypes.number,
    ai_review: PropTypes.bool
}