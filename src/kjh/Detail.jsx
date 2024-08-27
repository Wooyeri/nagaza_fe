import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // 추가

import 'src/Component/detail/Detail.css'; // CSS 파일 임포트
import ScrapMarkYellow from 'src/Component/detail/ScrapMarkYellow.png';
import axios from 'axios';

const Detail = () => {
  const [liked, setLiked] = useState(false);
  const [scrapped, setScrapped] = useState(false);
  const [movieData, setMovieData] = useState(null);
  const [isRatingVisible, setIsRatingVisible] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/movies/${id}`)
      .then(response => {
        console.log('API Response:', response.data); // API 응답 확인
        setMovieData(response.data);
      })
      .catch(error => console.error('Error fetching movie data:', error));
  }, [id]);

  if (!movieData) {
    return <p>Loading...</p>; // 데이터가 로딩 중일 때 표시할 메시지
  }

  console.log(movieData.posterUrl)
  

  return (
    <div className="e6_754">
      <div className="e6_796">
        <div className="ei6_796_5_2011">
          <div className="ei6_796_5_1985">
            이름깨짐 ( 뭐 넣어야함 )
          </div>
        </div>
        <div className="ei6_796_5_1987">
          사람 마크
        </div>
      </div>
      <div className="e6_816">
        <div className="ei6_816_33_3909">
          <div className="ei6_816_33_3910">
            <div className="ei6_816_33_3911">
              <div className="ei6_816_33_3912"></div>
              <div className="ei6_816_33_3914">
                <span className="ei6_816_33_3915">영화</span>
              </div>
            </div>
            <div className="ei6_816_33_3917">
              <div className="ei6_816_33_3918"></div>
              <div className="ei6_816_33_3920">
                <span className="ei6_816_33_3921">숙소</span>
              </div>
            </div>
            <div className="ei6_816_33_3923">
              <div className="ei6_816_33_3924"></div>
              <div className="ei6_816_33_3926">
                <span className="ei6_816_33_3927">음식</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="e6_852">
      <div className="ei6_852_107_8840">
          {movieData.posterUrl ? (
            <img 
              src={movieData.posterUrl} 
              alt="포스터 사진" 
              // style={{ width: '300px', height: 'auto' }} 
            />
          ) : (
            '포스터 사진 없음'
          )}
        </div>
        {/* <div className="ei6_852_107_8850">포스터 사진</div> */}
      </div>
      <div className="e6_855">
        <div>
          <p>
            좋아요 개수
            <button 
              onClick={() => setLiked(!liked)} 
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              <img 
                src={liked ? 'https://p.kindpng.com/picc/s/120-1203949_corazn-heart-tumblr-tatuaje-tattoo-heart-heart-png.png' 
                  : 'https://p.kindpng.com/picc/s/111-1119425_instagram-heart-icon-png-heart-with-a-question.png'} 
                alt="좋아요" 
                style={{ width: '24px', height: '24px' }} 
              />
            </button>
            <button 
              onClick={() => setScrapped(!scrapped)} 
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              <img 
                src={scrapped ? 'https://p.kindpng.com/picc/s/185-1852972_bookmark-png-clipart-new-instagram-share-icon-transparent.png' 
                  : ScrapMarkYellow} 
                alt="스크랩" 
                style={{ width: '24px', height: '24px' }} 
              />
            </button>
          </p>
          {/* <h1>제목</h1>
          <p>장르</p>
          <p>상영시간</p>
          <p>개봉날짜</p>
          <p>평점</p>
          <p>출연</p> */}
          <h1>{movieData.title}</h1>
          <p>감독: {movieData.director}</p>
          {/* <p>개봉날짜: {movieData.reviewSummary}</p> */}
          <p>출연: {movieData.cast}</p>
        </div>
        <div 
          className="e6_863"
          onMouseEnter={() => setIsRatingVisible(true)}
          onMouseLeave={() => setIsRatingVisible(false)}
        >
          {isRatingVisible && (
            <div className="rating-info">
              Emotion Rating: {movieData.emotionRating}
            </div>
          )}
        </div>
        <span className="e6_915">
          -리뷰(댓글) 반응 요약
          -예시 리뷰 몇 개
        </span>
      </div>
      <div className="e6_920">
        <div className="ei6_920_101_3519">
          <div className="ei6_920_101_3519_3_9350"></div>
          <div className="ei6_920_101_3519_3_9351"></div>
        </div>
      </div>
      <div className="e6_921">
        <div className="ei6_921_102_14785">
          <div className="ei6_921_102_14786"></div>
        </div>
        <div className="ei6_921_102_14787">
          <span className="ei6_921_102_14788">{movieData.negReview}</span>
        </div>
      </div>
      <div className="e6_922">
        <div className="ei6_922_102_14800">
          <span className="ei6_922_102_14801">{movieData.posReview}</span>
        </div>
        <div className="ei6_922_102_14802"></div>
      </div>
      <div className="e6_923">
        <div className="ei6_923_101_3519">
          <div className="ei6_923_101_3519_3_9350"></div>
          <div className="ei6_923_101_3519_3_9351"></div>
        </div>
      </div>
      <div className="e6_1099">
        <span className="ei6_1099_47_49">
          팀원들 이름 @ 2024.08 SK-s-r-project-사이트이름.
        </span>
      </div>
    </div>
  );
};

export default Detail;
