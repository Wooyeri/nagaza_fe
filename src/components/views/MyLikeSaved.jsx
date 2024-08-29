import { useEffect, useState } from "react";
import "./common/button.css"
import like from '@/assets/img/like_icon.svg';
import bookmark from '@/assets/img/bookmark_icon.svg'
import { useNavigate, useParams } from "react-router-dom";
import ScrapList from "@/components/myList/ScrapList";
import LikeList from "../myList/LikeList";

export default function MyLikeSaved(){
    const navigate = useNavigate();
    const { category } = useParams();
    const [curCategory, setCurCategory] = useState('');

    useEffect(()=>{
        if(!sessionStorage.getItem('jwtToken')) {
            navigate('/404');
            return;
        }
        if(category === 'liked' || category === 'saved'){
            setCurCategory(category);
        }
        navigate('/mypage/mylists', { replace: true })
    }, [navigate, category])

    const containerStyle = { width: "100%", display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: "100px" };
    const buttonStyle = { width: '60px', height: '60px', borderRadius: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', margin: '0 60px' };
    const buttonFont = { textAlign: 'center', fontWeight: 'extra bold', fontSize: '16px', margin: '15px' };
    return(
        <div style={containerStyle}>
            <div className="category-btns" style={{display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '60px'}}>
                <div className="liked">
                    <div className={curCategory === 'liked' ? "selected-btn" : "category-btn"} onClick={() => {setCurCategory('liked')}} style={buttonStyle}><img src={like} style={{width: "30px"}} /></div>
                    <div style={buttonFont}>좋아요</div>
                </div>
                <div className="saved">
                    <div className={curCategory === 'saved' ? "selected-btn" : "category-btn"} onClick={() => {setCurCategory('saved')}} style={buttonStyle}><img src={bookmark} style={{width: "30px"}} /></div>
                    <div style={buttonFont}>스크랩</div>
                </div>
            </div>
            {curCategory !== '' && (curCategory === 'liked' ? <LikeList /> : <ScrapList />)}
        </div>
    )
}