import "./Header.css"
import logo from "../../assets/logoipsum.svg"
import avatar from "../../assets/avatar.svg"

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