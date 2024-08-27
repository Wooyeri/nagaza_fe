import Header from "./Header";
import Footer from "./footer";
import { Outlet } from "react-router-dom";

export default function Layout(){
    return(
        <div style={{ display: 'flex', flexDirection: 'column', width:'100%', minHeight: '100%', justifyContent: "space-around"}}>
            <Header />
            <div style={{display: "flex", flexGrow: '1', justifyContent: "center"}}>
                <Outlet />
            </div>
            <Footer />            
        </div>
    )
}