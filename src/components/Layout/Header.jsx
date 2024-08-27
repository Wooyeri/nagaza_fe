import "./Header.css"
import logo from "../../assets/logoipsum.svg"
import avatar from "../../assets/avatar.svg"

//Todo: 로그인 여부 확인하여 이미지 바꾸기

export default function Header(){
    return(
        <div className="header">
            <div className="logo">
                <img src={logo} />
            </div>
            <div className="avatar">
                    <img src={avatar} style={{width: "40px"}} />
            </div>
        </div>
    )
}