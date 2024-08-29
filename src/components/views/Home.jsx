import { useContext } from 'react';
import { ThemeContext } from '@/common/Context';
import CategoryLinkButtons from "./common/CategoryLinkButtons"
import { lightPallete, darkPallete } from "@/assets/pallete"

export default function Home(){
    const { darkMode } = useContext(ThemeContext);
    
    const containerStyles = { width: "100%", display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center', margin: "150px 0" };
    const titleStyles = {fontWeight: '600', fontSize: '48px', lineHeight: '58px', color: darkMode ? darkPallete.plainText : lightPallete.plainText};
    const subTextStyles = {fontWeight: '400', fontSize: '18px', lineHeight: '24px', color:  darkMode ? darkPallete.grayText : lightPallete.grayText};

    return(
        <div style={containerStyles}>
            <div className="title" style={{textAlign: 'center'}}>
                <div><span style={subTextStyles}>똑똑한 여가 생활을 원해?</span></div>
                <h1 style={titleStyles}>나가자!</h1>
                <div><span style={subTextStyles}>분야별 리뷰 AI 요약 시스템</span></div>
            </div>
            <CategoryLinkButtons />
        </div>
    )
}