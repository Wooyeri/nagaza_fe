import { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { PropTypes } from 'prop-types';
import { ThemeContext } from "@/common/Context";
import Header from "./Header";
import Footer from "./footer";
import { lightPallete, darkPallete } from "@/assets/pallete";


function ContextProvider ({ children }) {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => setDarkMode(!darkMode);

    return(
        <ThemeContext.Provider value={{darkMode, toggleDarkMode}}>
            {children}
        </ThemeContext.Provider>
    )
}
ContextProvider.propTypes = {
    children: PropTypes.element
}

export default function Layout(){
    return(
        <ContextProvider>
            <LayoutInner />
        </ContextProvider>
    )
}

function LayoutInner() {
    const { darkMode } = useContext(ThemeContext);
    
    const containerStyles = { display: 'flex', flexDirection: 'column', width:'100%', minHeight: '100%', justifyContent: "space-around"};
    const outletWrapperStyles = {display: "flex", flexGrow: '1', justifyContent: "center", backgroundColor: darkMode ? darkPallete.background : lightPallete.background};

    return (
        <div style={containerStyles}>
            <Header />
                <div style={outletWrapperStyles}>
                    <Outlet />
                </div>
            <Footer />
        </div>
    )
}