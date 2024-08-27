import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function NotFound(){
    const navigate = useNavigate();
    useEffect(()=>{
        setTimeout(() => navigate('/'), 3000);
    }, [navigate])
    return(
        <div style={{width: "100%", height:"400px", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <div><span style={{fontSize: "80px", color: "#2da6ca"}}>404 Not Found!</span></div>
        </div>
    )
}