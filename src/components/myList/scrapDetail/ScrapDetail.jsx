import PropTypes from 'prop-types';
import like from '@/assets/like_icon.svg';
//import like_filled from '@/assets/like_red.svg';
import bookmark from '@/assets/bookmark_icon.svg';
//import bookmark_filled from '@/assets/bookmark_yellow.svg';
import robot_icon from '@/assets/robot_icon.svg';
import './scrapDetail.css';
import { useEffect, useState } from 'react';

function ScrapDetail({ contents }) { // 기본값으로 빈 배열 설정
    const [desc, setDesc] = useState('');
    useEffect(() => {
        var str = '댓글은 영화에 대한 긍정적인 반응과 부정적인 반응이 혼재되어 있습니다. 긍정적인 부분은 영화의 재미, 크리처물과 AI의 조합, 배우들의 연기력, 연출 등에 대한 칭찬입니다. 특히 "재밌게 봤네요 추천합니다", "못참 지", "재밌고 볼 거리 있었다", "상상력의 끝은 어디인가", "잘만들어엇요 그리고연출하시는 분들도 잘햇어요" 와 같은 긍정적인 표현이 두드러집니다. 반면, "발암과 서스펜스", "계집애로 만듬" 등의 표현에서 알 수 있듯이, 여성 캐릭터에 대한 묘사와 영화 내용에 대한 비판적인 의견도 존재합니다. 전반적으로 영화에 대한 호불호가 갈리는 것을 알 수 있습니다.'
        if(str.length > 70) setDesc(str.slice(0, 71) + '...');
        else setDesc(str)
    }, [])
  return (
    <div className="scraped-post-container">
        <div className='scraped-post'>
            <img src={contents.poster_url} alt={contents.title} className="scraped-post-image" />
            <div className="scraped-post-content">
                <h2 className="scraped-post-title">{contents.title}</h2>
                <div className="scraped-post-icons">
                    <span>{contents.likes}</span>
                    <img src={like} alt='heart-icon' />
                    <img src={bookmark} alt='bookmark-icon' />
                    {JSON.parse(contents.ai_review) ? <img className='robot' src={robot_icon} alt='robot-icon' /> : <></>}
                </div>
                <div className="description">
                    {JSON.parse(contents.ai_review) && desc}
                </div>
            </div>
        </div>
        <div className='divider'></div>
    </div>
  );
}

// Add PropTypes validation
ScrapDetail.propTypes = {
  contents: PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string.isRequired,
      likes: PropTypes.string.isRequired,
      poster_url: PropTypes.string.isRequired,
      ai_review: PropTypes.string
    })
};

export default ScrapDetail;
