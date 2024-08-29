import { useEffect, useState } from "react"
import PropTypes from 'prop-types'
import EmotionGauge from "./card/EmotionGauge"

import likeIcon from '@/assets/like_icon.svg'
import bookmarkIcon from '@/assets/bookmark_icon.svg'
import robotIcon from '@/assets/robot_icon.svg'

// Todo: 좋아요, 스크랩 여부 로그인 상태 확인해서 그림 바꾸기

export default function ListDetail({category, contents}){
    const summaryTitleStyles = {
        display: "flex", flexDirection: "row", alignItems: "center", backgroundColor: "#A9EAFF", borderRadius: "5px",
        padding: "0 20px", width: "fit-content", maxWidth: "100%", marginBottom: "5px"
    };
    const [likes, setLikes] = useState(0);
    const [aiReview, setAiReview] = useState(0);
    const [title, setTitle] = useState('');
    const [posterUrl, setPosterUrl] = useState('');
    const [emotionRating, setEmotionRating] = useState(50);
    const [reviewSummary, setReviewSummary] = useState('');
    const [review, setReview] = useState([]);
    const [desc1, setDesc1] = useState('');
    const [desc2, setDesc2] = useState('');
    const [desc3, setDesc3] = useState('');

    const getRandomReview = () => {
        var randomIdx = Math.ceil(Math.random() * review.length) - 1;
        if (randomIdx < 0) randomIdx = 0;
        return review[randomIdx]
    }

    const descStyles = {
        margin: "0.5em 0",
        maxWidth: "100%"
    }

    useEffect(() => {
        setLikes(contents.likeCount);
        setAiReview(contents.emotionRating != null);
        setEmotionRating(contents.emotionRating);
        setTitle(contents.title ? contents.title : contents.name)
        setPosterUrl(contents.posterUrl)

        if (contents.reviewSummary && contents.reviewSummary.startsWith('총평: ')){
            setReviewSummary(contents.reviewSummary.substring(4));
        } else setReviewSummary(contents.reviewSummary)

        if(contents.review) setReview(contents.review);

        // 카테고리 종류 마다 구분 필요
        if(category == 'movie'){
            setDesc1(`감독: ${contents.director}`);
            setDesc2(`캐스팅: ${contents.cast}`);
            setDesc3(`예매율: ${contents.rating}`)
        } else if (category == 'hotel')
            setDesc1(contents.location)
        else if (category == 'restaurant')
            setDesc1(contents.foodType)
    }, []);

    return(
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <div className="description" style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                <div><img src={posterUrl} style={{maxWidth: "26rem", minWidth: "18rem", minHeight: "18rem", maxHeight: "24rem", borderRadius: "3px"}}/></div>
                <div style={{margin: "10px 50px", marginRight: "0", width: "50%"}}>
                    <div className="btn-area" style={{display: 'flex', marginTop: '15px', flexDirection: 'row', alignItems: 'center'}}>
                        <span style={{fontSize: '14px', margin: '0 3px'}}>{likes}</span>
                        <img src={likeIcon} style={{width: '25px', marginRight: '5px'}} />
                        <img src={bookmarkIcon} style={{width: '25px', margin: '0 5px'}} />
                    </div>
                    <h1 style={{fontWeight: '600', fontSize: '36px', lineHeight: '150%', color: "#111827"}}>{title}</h1>
                    <div className="contents" style={{marginBottom: '30px'}}>
                        <p style={descStyles}>{desc1}</p>
                        {desc2 && <p style={descStyles}>{desc2}</p>}
                        {desc3 && <p style={descStyles}>{desc3}</p>}
                    </div>
                    <EmotionGauge emotionRating={emotionRating} />
                </div>
            </div>
            <div className="review-summary" style={{display: "flex", justifyContent: "center", marginTop: "1em"}}>
                {aiReview ?
                    <div style={{margin: "30px", maxWidth: "60%"}}>
                        <div style={summaryTitleStyles}>
                            <img src={robotIcon} style={{width: '30px', margin: '10px 0'}}/>
                            <span style={{margin: "0 20px", fontWeight: "bold"}}>AI 리뷰 요약</span>
                        </div>
                        <div style={{backgroundColor: "#EFF9FB", padding: "20px", borderRadius: "5px", maxWidth: "70em", lineHeight: "1.6"}}>{reviewSummary}</div>
                    </div> :
                    review.length > 0 && <div style={{margin: "30px", maxWidth: "60%"}}>
                        <div style={summaryTitleStyles}>
                            <span style={{margin: "0 20px", fontWeight: "bold"}}>사용자 리뷰</span>
                        </div>
                        <div style={{backgroundColor: "#EFF9FB", padding: "20px", borderRadius: "5px", maxWidth: "70em", lineHeight: "1.6"}}>{getRandomReview()}</div>
                    </div>
                }
            </div>
        </div>
    )
}
ListDetail.propTypes = {
    category: PropTypes.string,
    contents: PropTypes.object
}