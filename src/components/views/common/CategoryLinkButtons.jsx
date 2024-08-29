import { useContext } from "react"
import { Link } from "react-router-dom"
import { ThemeContext } from '@/common/Context';

import { lightPallete, darkPallete } from "@/assets/pallete"
import movie from "@/assets/img/movie.svg"
import hotel from "@/assets/img/hotel.svg"
import restaurant from "@/assets/img/restaurant.svg"
import "./button.css"

export default function CategoryLinkButtons(){
    const { darkMode } = useContext(ThemeContext);

    const buttonStyle = { width: '60px', height: '60px', borderRadius: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', margin: '0 60px' };
    const buttonFont = { textAlign: 'center', fontWeight: 'extra bold', fontSize: '16px', margin: '15px', color: darkMode ? darkPallete.plainText : lightPallete.plainText };

    return(
        <div className="category-btns" style={{display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '60px'}}>
            <div className="movie">
                <Link to={"/lists/movie"}>
                    <div className="category-btn" style={buttonStyle}><img src={movie} style={{width: "30px"}} /></div>
                </Link>
                <div style={buttonFont}>영화</div>
            </div>
            <div className="hotel">
                <Link to={"/lists/hotel"}>
                    <div className="category-btn" style={buttonStyle}><img src={hotel} style={{width: "30px"}} /></div>
                </Link>
                <div style={buttonFont}>숙박</div>
            </div>
            <div className="restaurant">
                <Link to={"/lists/restaurant"}>
                    <div className="category-btn" style={buttonStyle}><img src={restaurant} style={{width: "30px"}} /></div>
                </Link>
                <div style={buttonFont}>식당</div>
            </div>
        </div>
    )
}