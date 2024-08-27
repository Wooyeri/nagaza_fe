import movie from "@/assets/movie.svg"
import hotel from "@/assets/hotel.svg"
import restaurant from "@/assets/restaurant.svg"
import "./button.css"
import { Link } from "react-router-dom"

export default function Home(){
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: "150px 0"
    }
    const buttonStyle = {
        width: '60px',
        height: '60px',
        borderRadius: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        margin: '0 60px'
    }
    const buttonFont = {
        textAlign: 'center',
        fontWeight: 'extra bold',
        fontSize: '16px',
        margin: '15px'
    }

    return(
        <div style={containerStyle}>
            <div className="title" style={{textAlign: 'center'}}>
                <div><span style={{fontWeight: '400', fontSize: '18px', lineHeight: '24px', color: '#757575'}}>똑똑한 여가 생활을 원해?</span></div>
                <h1 style={{fontWeight: '600', fontSize: '48px', lineHeight: '58px', color: '#212121'}}>나가자!</h1>
                <div><span style={{fontWeight: '400', fontSize: '18px', lineHeight: '24px', color: '#757575'}}>분야별 리뷰 AI 요약시스템</span></div>
            </div>
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
        </div>
    )
}