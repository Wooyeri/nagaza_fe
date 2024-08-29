import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import MyMenu from "./MyMenu"
import "./Header.css"
import "./headerButtons.css"
import logo from "@/assets/img/logo.svg";
import avatar from "@/assets/img/avatar.svg"

export default function Header(){
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    useEffect(()=>{
        if(sessionStorage.getItem('jwtToken')) {
            setIsLogin(true);
        }
        else setIsLogin(false);
    }, [isLogin]);

    const avatarStyles = {
        display: "flex", justifyContent: "center", alignItems: "center",
        background: "#F5F5F5", width: "40px", height: "40px",
        padding: "5px", borderRadius: "30px"};

    return(
        <div className="header" style={{height: "4.5rem"}}>
            <div className="logo" style={{cursor: "pointer"}} onClick={() => {navigate('/')}}>
                <img src={logo} style={{width: "13rem"}} />  
            </div>
            <div className="avatar" style={{position: "relative", display: "inline-block"}}>
                {isLogin ?
                    <div style={{marginRight: "1.5rem"}}>
                        <div style={avatarStyles}><img src={avatar} style={{width: "30px", cursor: "pointer"}} onClick={() => {setShowDropdown(!showDropdown)}} /></div>
                        <MyMenu showDropdown={showDropdown} setShowDropdown={setShowDropdown} />
                    </div>
                :<div>
                    <button className="header-btn signup" onClick={() => {navigate('/signup')}} style={{border: "1px solid #1F1BDA"}}>Sign Up</button>
                    <button className="header-btn login" onClick={() => {navigate('/login')}}>Login</button>
                </div>}
            </div>
        </div>
    )
}