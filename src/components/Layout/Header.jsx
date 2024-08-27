import "./Header.css"
import "./headerButtons.css"
import logo from "../../assets/logoipsum.svg"
import avatar from "../../assets/avatar.svg"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Header(){
    const [isLogin, setIsLogin] = useState(false);
    const navigate = useNavigate();
    useEffect(()=>{
        if(sessionStorage.getItem('jwtToken')) setIsLogin(true);
    }, [isLogin]);

    return(
        <div className="header">
            <div className="logo" style={{cursor: 'pointer'}} onClick={() => {navigate('/')}}>
                <img src={logo} />
            </div>
            <div className="avatar">
                {isLogin ?
                    <img src={avatar} style={{width: "40px"}} />
                :<div>
                    <button className="header-btn signup" onClick={() => {navigate('/signup')}} style={{border: '1px solid #1F1BDA'}}>Sign Up</button>
                    <button className="header-btn login" onClick={() => {navigate('/login')}}>Login</button>
                </div>}
            </div>
        </div>
    )
}