import { useEffect } from "react"
import "./common/button.css"
import avatar from "@/assets/img/avatar.svg"
import { useNavigate } from "react-router-dom"

export default function PersonalInfo(){
    const navigate = useNavigate();
    useEffect(() => {
        if(!sessionStorage.getItem('jwtToken')) {
            navigate('/404');
            return;
        }
    }, [navigate])
    const containerStyles = {
        display: "flex", flexDirection: "column", alignItems: "center",
        margin: "4rem 0", width: "100%", justifyContent: "center"}
    const imageContainerStyles = {
        border: '2px solid #111827', borderRadius: "5px", width: "20rem", height: "13rem",
        display: "flex", justifyContent: "center", alignItems: "center"
    }
    return(
        <div className="personal-container" style={containerStyles}>
            <div className="info" style={imageContainerStyles}> <img src={avatar} style={{width: "4rem"}} /> </div>
            <div style={{padding: "2rem"}}>
                <div>이름: </div>
                <div>ID: </div>
                <div>Email: </div>
            </div>
            <div><button className="password-change">비밀번호 변경</button></div>
        </div>
    )
}