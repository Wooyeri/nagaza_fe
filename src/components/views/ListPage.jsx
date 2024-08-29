import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ListMovie from "@/components/list/ListMovie";
import ListPlain from "@/components/list/ListPlain";
import { ThemeContext } from '@/common/Context';
import { getMovieLists, getHotelLists, getRestaurantLists } from "../../services/listServices";

import { lightPallete, darkPallete } from "@/assets/pallete";
import "./ListPage.css"
import "./common/button.css"
import searchIcon from "@/assets/img/search_icon.svg"
import movie from "@/assets/img/movie.svg"
import hotel from "@/assets/img/hotel.svg"
import restaurant from "@/assets/img/restaurant.svg"
import underArrow from "@/assets/img/underArrow.svg"
import underArrow_dark from "@/assets/img/underArrow_dark.svg"


export default function ListPage() {
    const { darkMode } = useContext(ThemeContext);
    const navigate = useNavigate();
    const { category } = useParams();
    const [search, setSearch] = useState('');
    const [curCategory, setCurCategory] = useState('');
    const [spreadSort, setSpreadSort] = useState(false);
    const [sortOption, setSortOption] = useState('정렬 기준');
    const [listSource, setListSorce] = useState();

    const handleCategoryBtn = (category) => { setCurCategory(category); setListSorce([]) }

    useEffect(() => {
        if (category) {
            if (category === 'movie' || category === 'hotel' || category === 'restaurant') setCurCategory(category);
            else navigate('/lists')
        }
    }, [navigate, category])
    useEffect(() => {
        const jwtToken = sessionStorage.getItem('jwtToken');
        if (curCategory === 'movie') {
            getMovieLists(jwtToken)
                .then(res => {
                    if (typeof (res.data) === 'object' && res.data.length > 0) setListSorce(res.data)
                })
                .catch(err => console.error(err))
        } else if (curCategory === 'hotel') {
            getHotelLists(jwtToken)
                .then(res => {
                    if (typeof (res.data) === 'object' && res.data.length > 0) setListSorce(res.data)
                })
                .catch(err => console.error(err))
        } else if (curCategory === 'restaurant') {
            getRestaurantLists(jwtToken)
                .then(res => {
                    if (typeof (res.data) === 'object' && res.data.length > 0) setListSorce(res.data)
                })
                .catch(err => console.error(err))
        }
    }, [curCategory])

    const containerStyle = { width: "100%", justifyContent: "center", display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: "100px" };
    const sortOptionStyles = { position: 'absolute', top: '110%', left: '50%', transform: 'translateX(-50%)', zIndex: 1, backgroundColor:  darkMode ? darkPallete.background : lightPallete.background , width: '120px', border: '2px solid #CBD2E0', borderRadius: '5px', color: darkMode ? darkPallete.plainText : lightPallete.plainText }
    const buttonStyle = { width: '60px', height: '60px', borderRadius: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', margin: '0 60px' };
    const buttonFont = { textAlign: 'center', fontWeight: 'extra bold', fontSize: '16px', margin: '15px', color: darkMode ? darkPallete.plainText : lightPallete.plainText };
    const searchAreaStyles = {display: 'flex', flexDirection: 'row', alignItems: 'center', width: '50%', padding: '10px 10px 10px 15px', border: `2px solid ${ darkMode ? darkPallete.grayLine : lightPallete.grayLine }`, borderRadius: '30px'};
    const searchBarStyles = { width: '80%', fontSize: '20px', border: 'none', margin: '0 3%', backgroundColor: darkMode ? darkPallete.background : lightPallete.background };

    return (
        <div className="list-page-container" style={containerStyle}>
            <div className="category-btns" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '60px' }}>
                <div className="movie">
                    <div className={curCategory === 'movie' ? "selected-btn" : "category-btn"} onClick={() => handleCategoryBtn('movie')} style={buttonStyle}><img src={movie} style={{ width: "30px" }} /></div>
                    <div style={buttonFont}>영화</div>
                </div>
                <div className="hotel">
                    <div className={curCategory === 'hotel' ? "selected-btn" : "category-btn"} onClick={() => handleCategoryBtn('hotel')} style={buttonStyle}><img src={hotel} style={{ width: "30px" }} /></div>
                    <div style={buttonFont}>숙박</div>
                </div>
                <div className="restaurant">
                    <div className={curCategory === 'restaurant' ? "selected-btn" : "category-btn"} onClick={() => handleCategoryBtn('restaurant')} style={buttonStyle}><img src={restaurant} style={{ width: "30px" }} /></div>
                    <div style={buttonFont}>식당</div>
                </div>
            </div>
            <div className="search-area" style={searchAreaStyles}>
                <img src={searchIcon} />
                <input type="text" value={search} placeholder="Search..." onChange={(e) => { setSearch(e.target.value) }} style={searchBarStyles} />
            </div>
            <div className="sort-area" style={{ width: '100%', display: 'flex', justifyContent: 'right', margin: '50px 0' }}>
                <div style={{ position: 'relative', display: 'inline-block', margin: '0 15%' }}>
                    <div className="sort-btn" onClick={() => { setSpreadSort(!spreadSort) }} style={{borderColor: darkMode ? darkPallete.grayLine : lightPallete.grayLine }}>
                        <div style={{color: darkMode ? darkPallete.plainText : lightPallete.plainText}}>{sortOption}</div> <img className={`arrow-btn ${spreadSort ? 'open' : ''}`} src={darkMode ? underArrow_dark : underArrow} />
                    </div>
                    <div style={sortOptionStyles} className={`${darkMode ? 'dark' : 'plain'}`} hidden={spreadSort ? false : true}>
                        <ul className="sort-list" style={{ listStyle: 'none', padding: '0', textAlign: 'center' }}>
                            <li onClick={() => { setSortOption('좋아요 순'); setSpreadSort(false) }}>좋아요 순</li>
                            <li onClick={() => { setSortOption('이름 순'); setSpreadSort(false) }}>이름 순</li>
                        </ul>
                    </div>
                </div>
            </div>
            {curCategory !== '' && listSource && (curCategory === 'movie' ? <ListMovie data={listSource} /> : <ListPlain data={listSource} category={curCategory} />)}
        </div>
    )
}