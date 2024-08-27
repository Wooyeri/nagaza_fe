import PropTypes from 'prop-types';
import { useState, useEffect } from "react"

export default function EmotionGauge({emotion_rating}){
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
    }, [emotion_rating])

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