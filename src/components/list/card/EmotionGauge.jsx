import PropTypes from 'prop-types';
import { useState, useEffect } from "react"

export default function EmotionGauge({emotionRating}){
    const [position, setPosition] = useState(0);
    const [emoji, setEmoji] = useState('');
    useEffect(()=>{
        setPosition((emotionRating - 5.54) + '%');

        if (emotionRating == null) setEmoji('')
        else if (emotionRating >= 0 && emotionRating < 20){
            setEmoji('😡');
        } else if (emotionRating < 40){
            setEmoji('😞');
        } else if (emotionRating < 60){
            setEmoji('😐');
        } else if (emotionRating < 80){
            setEmoji('😊');
        } else if (emotionRating <= 100){
            setEmoji('😍');
        }
    }, [emotionRating])

    const gaugeBar = {
        display: 'flex',
        width: '250px',
        height: '30px',
        background: 'linear-gradient(90deg, rgba(255, 0, 0, 0.45) 0%, rgba(251, 141, 13, 0.45) 25%, rgba(250, 255, 21, 0.45) 50%, rgba(191, 255, 54, 0.45) 75%, rgba(8, 255, 3, 0.45) 100%)',
        borderRadius: '8px',
    };
    return(
        <div style={{...gaugeBar, flexDirection:'column', justifyContent: 'center'}}>
            <div style={{marginLeft: position, fontSize: '20px', width: 'fit-content'}}>{emoji}</div>
        </div>
    )
}
EmotionGauge.propTypes = {
    emotionRating: PropTypes.number
}