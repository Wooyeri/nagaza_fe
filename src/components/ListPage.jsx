import { useEffect, useState } from "react"
import "./ListPage.css"
import "./button.css"
import searchIcon from "@/assets/search_icon.svg"
import movie from "@/assets/movie.svg"
import hotel from "@/assets/hotel.svg"
import restaurant from "@/assets/restaurant.svg"
import underArrow from "@/assets/underArrow.svg"

import { testHotel, testMovie } from "./testData"
import ListMovie from "./ListMovie"
import ListPlain from "./ListPlain"
import { useNavigate, useParams } from "react-router-dom"


export default function ListPage(){
    const navigate = useNavigate();
    const { category } = useParams();
    const [search, setSearch] = useState('');
    const [curCategory, setCurCategory] = useState('');
    const [spreadSort, setSpreadSort] = useState(false);

    useEffect(()=>{
        if(category) {
            if( category === 'movie' || category === 'hotel' || category === 'restaurant' )setCurCategory(category);
            navigate('/lists', { replace: true })
        }
    }, [navigate, category])

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: "100px"
    };
    const buttonStyle = {
        width: '60px',
        height: '60px',
        borderRadius: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        margin: '0 60px'
    };
    const buttonFont = {
        textAlign: 'center',
        fontWeight: 'extra bold',
        fontSize: '16px',
        margin: '15px'
    };
    return(
        <div className="list-page-container" style={containerStyle}>
            <div className="category-btns" style={{display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '60px'}}>
                <div className="movie">
                    <div className={curCategory === 'movie' ? "selected-btn" : "category-btn"} onClick={() => {setCurCategory('movie')}} style={buttonStyle}><img src={movie} style={{width: "30px"}} /></div>
                    <div style={buttonFont}>영화</div>
                </div>
                <div className="hotel">
                    <div className={curCategory === 'hotel' ? "selected-btn" : "category-btn"} onClick={() => {setCurCategory('hotel')}} style={buttonStyle}><img src={hotel} style={{width: "30px"}} /></div>
                    <div style={buttonFont}>숙박</div>
                </div>
                <div className="restaurant">
                    <div className={curCategory === 'restaurant' ? "selected-btn" : "category-btn"} onClick={() => {setCurCategory('restaurant')}} style={buttonStyle}><img src={restaurant} style={{width: "30px"}} /></div>
                    <div style={buttonFont}>식당</div>
                </div>
            </div>
            <div className="search-area" style={{display: 'flex', flexDirection: 'row', alignItems: 'center', width: '70%', padding: '10px 10px 10px 15px', border: '1px solid #9E9E9E', borderRadius: '30px'}}>
                <img src={searchIcon} />
                <input type="text" value={search} placeholder="Search..." onChange={(e) => {setSearch(e.target.value)}} style={{width: '80%', fontSize: '20px', border: 'none', margin: '0 3%'}} />
            </div>
            <div className="sort-area" style={{width: '100%', display: 'flex', justifyContent: 'right', margin: '50px 0'}}>
                <div style={{ position: 'relative', display: 'inline-block', margin: '0 15%'}}>
                    <div className="sort-btn" onClick={() => {setSpreadSort(!spreadSort)}}>
                        <div>정렬 기준</div> <img className={`arrow-btn ${spreadSort ? 'open' : ''}`} src={underArrow} />
                    </div>
                    <div style={{position: 'absolute', top: '110%', left: '50%', transform: 'translateX(-50%)', zIndex: 1, backgroundColor: 'white', width:'120px', border: '2px solid #CBD2E0',borderRadius: '5px'}} hidden={spreadSort ? false : true}>
                        <ul className = "sort-list" style={{listStyle: 'none', padding: '0', textAlign: 'center'}}>
                            <li>좋아요 순</li>
                            <li>이름 순</li>
                        </ul>
                    </div>
                </div>
            </div>
            {curCategory === 'movie'? <ListMovie data={testMovie} /> : <ListPlain data={testHotel} />}
        </div>
    )
}