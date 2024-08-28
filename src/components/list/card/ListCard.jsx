import PropTypes from 'prop-types';
import './card.css'
import EmotionGauge from "./EmotionGauge"
import likeIcon from '@/assets/like_icon.svg'
import bookmarkIcon from '@/assets/bookmark_icon.svg'
import robotIcon from '@/assets/robot_icon.svg'
import { useNavigate } from 'react-router-dom';

export default function ListCard({likeCount, name, poster_url, optional, emotionRating, aiReview}){
    const id = 'any'
    const navigate = useNavigate();
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
        <div className="card" style={styles} onClick={() => {navigate(id)}}>
            <img src={poster_url} style={{width: '330px', minHeight: '200px', borderRadius: '10px', backgroundColor: 'rgb(210, 210, 210)', border: 'none'}}/>
            <div className="btn-area" style={{display: 'flex', marginTop: '15px', flexDirection: 'row', alignItems: 'center'}}>
                <span style={{fontSize: '14px', margin: '0 3px'}}>{likeCount}</span>
                <img src={likeIcon} style={{width: '25px', marginRight: '5px'}} />
                <img src={bookmarkIcon} style={{width: '25px', margin: '0 5px'}} />
                {aiReview ? <img src={robotIcon} style={{width: '30px', margin: '0 5px'}}/> : <></>}
            </div>
            <div className="contents" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h3 style={{margin: '15px 0', fontWeight: '600', fontSize:'24px', color: '#111827'}}>{name}</h3>
                <div style={{color: '#6D7280', marginBottom: '10px', fontSize: '16px'}}>
                    <div style={{fontFamily:'Microsoft GothicNeo'}}>{optional}</div>
                </div>
                <EmotionGauge emotionRating={emotionRating} />
            </div>
        </div>
    )
}
ListCard.propTypes = {
    id: PropTypes.number,
    likeCount: PropTypes.string,
    name: PropTypes.string,
    poster_url: PropTypes.string,
    optional: PropTypes.string,
    emotionRating: PropTypes.number,
    aiReview: PropTypes.bool
}