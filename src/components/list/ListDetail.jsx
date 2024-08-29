import { useEffect, useState } from "react"
import EmotionGauge from "./card/EmotionGauge"
import axios from 'axios';

import likeIcon from '@/assets/like_icon.svg'
import bookmarkIcon from '@/assets/bookmark_icon.svg'
import robotIcon from '@/assets/robot_icon.svg'

// Todo: 이미지 가로 최소 크기는 영화는 다르게 할 것
// 리뷰랑 정보 가져오는 것 관련 통신 코드 작성
// 좋아요, 스크랩 여부 로그인 상태 확인해서 그림 바꾸기

import { testsummary } from "../testData"


export default function ListDetail(){
    const summaryTitleStyles = {
        display: "flex", flexDirection: "row", alignItems: "center", backgroundColor: "#A9EAFF", borderRadius: "5px",
        padding: "0 20px", width: "fit-content", maxWidth: "100%", marginBottom: "5px"
    };
    const testData = [{
        "likes": "123",
        "ai_review": "true",
        "title": "제목",
        "genre": "액션",
        "running_time": "205분",
        "release_date": "2024/8/27",
        "rating": "4.2",
        "emotion_rating": "74",
        "review_summary": testsummary
    }]
    const testDatum = testData[0];
    const [likes, setLikes] = useState(0);
    const [ai_review, setAi_review] = useState(0);
    const [title, setTitle] = useState('');
    const [emotion_rating, setEmotion_rating] = useState(50);
    const [review_summary, setReview_summary] = useState('');
    const [desc1, setDesc1] = useState('');
    const [desc2, setDesc2] = useState('');
    const [desc3, setDesc3] = useState('');
    const [desc4, setDesc4] = useState('');

    useEffect(() => {
        const {likes, ai_review, title, emotion_rating, review_summary, ...desc} = testDatum;
        setLikes(likes);
        setAi_review(ai_review);
        setTitle(title);
        setEmotion_rating(emotion_rating);
        setReview_summary(review_summary);
        // 카테고리 종류 마다 구분 필요
        setDesc1(desc.genre);
        setDesc2(desc.running_time);
        setDesc3(desc.release_date);
        setDesc4(desc.rating)
    }, []);


    useEffect(() => {
        // 서버에서 데이터를 받아오는 코드
        const token = sessionStorage.getItem('token');
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }
        console.log(token);
        axios.get('/api/restaurant/test/1') // 서버의 API 엔드포인트로 요청
            .then(response => {
                const data = response.data;
                setLikes(data.likes);
                setAi_review(data.ai_review === "true");
                setTitle(data.title);
                setEmotion_rating(Number(data.emotion_rating));
                setReview_summary(data.review_summary);
                // setDesc1(data.genre);
                setDesc1(data.foodType);
                setDesc2(data.running_time);
                setDesc3(data.release_date);
                setDesc4(data.rating);
            })
            .catch(error => {
                console.error('Error fetching data from server:', error);
            });
    }, []);

    return(
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <div className="description" style={{display: "flex"}}>
                <div><img style={{width: "550px", minHeight: "300px"}}/></div>
                <div style={{margin: "10px 50px"}}>
                    <div className="btn-area" style={{display: 'flex', marginTop: '15px', flexDirection: 'row', alignItems: 'center'}}>
                        <span style={{fontSize: '14px', margin: '0 3px'}}>{likes}</span>
                        <img src={likeIcon} style={{width: '25px', marginRight: '5px'}} />
                        <img src={bookmarkIcon} style={{width: '25px', margin: '0 5px'}} />
                    </div>
                    <h1 style={{fontWeight: '600', fontSize: '36px', lineHeight: '150%', color: "#111827"}}>{title}</h1>
                    <div className="contents" style={{marginBottom: '30px'}}>
                        <div style={{margin: "0.5em 0"}}>-{desc1}</div>
                        <div style={{margin: "0.5em 0"}}>-{desc2}</div>
                        <div style={{margin: "0.5em 0"}}>-{desc3}</div>
                        <div style={{margin: "0.5em 0"}}>-{desc4}</div>
                    </div>
                    <EmotionGauge emotion_rating={Number(emotion_rating)} />
                </div>
            </div>
            <div className="review-summary" style={{display: "flex", justifyContent: "center", marginTop: "1em"}}>
                {JSON.parse(ai_review) ?
                    <div style={{margin: "30px", maxWidth: "60%"}}>
                        <div style={summaryTitleStyles}>
                            <img src={robotIcon} style={{width: '30px', margin: '10px 0'}}/>
                            <span style={{margin: "0 20px", fontWeight: "bold"}}>AI 리뷰 요약</span>
                        </div>
                        <div style={{backgroundColor: "#EFF9FB", padding: "20px", borderRadius: "5px", maxWidth: "70em", lineHeight: "1.6"}}>{review_summary}</div>
                    </div> : <></>
                }
            </div>
        </div>
    )
}