import "./Header.css"
import "./headerButtons.css"
import logo from "../../assets/logoipsum.svg"
import avatar from "../../assets/avatar.svg"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import MyMenu from "./MyMenu"

export default function Header(){
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    useEffect(()=>{
        if(sessionStorage.getItem('jwtToken')) setIsLogin(true);
        setIsLogin(true);
    }, [isLogin]);

    return(
        <div className="header" style={{height: "4.5rem"}}>
            <div className="logo" style={{cursor: "pointer"}} onClick={() => {navigate('/')}}>
                <img src={logo} />
            </div>
            <div className="avatar" style={{position: "relative", display: "inline-block"}}>
                {isLogin ?
                    <div style={{marginRight: "3rem"}}>
                        <img src={avatar} style={{width: "40px", cursor: "pointer"}} onClick={() => {setShowDropdown(!showDropdown)}} />
                        <MyMenu showDropdown={showDropdown} />
                    </div>
                :<div>
                    <button className="header-btn signup" onClick={() => {navigate('/signup')}} style={{border: "1px solid #1F1BDA"}}>Sign Up</button>
                    <button className="header-btn login" onClick={() => {navigate('/login')}}>Login</button>
                </div>}
            </div>
        </div>
    )
}