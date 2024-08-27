import Header from "./Header";
import Footer from "./footer";
import { Outlet } from "react-router-dom";

export default function Layout(){
    return(
        <div style={{ display: 'flex', flexDirection: 'column', width:'100%', minHeight: '100%'}}>
            <Header />
            <div style={{flex: 1}}>
                <Outlet />
            </div>
            <Footer />            
        </div>
    )
}