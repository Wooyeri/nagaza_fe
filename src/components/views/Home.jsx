import CategoryLinkButtons from "./common/CategoryLinkButtons"

export default function Home(){
    const containerStyle = {
        width: "100%",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: 'center',
        margin: "150px 0"
    }

    return(
        <div style={containerStyle}>
            <div className="title" style={{textAlign: 'center'}}>
                <div><span style={{fontWeight: '400', fontSize: '18px', lineHeight: '24px', color: '#757575'}}>똑똑한 여가 생활을 원해?</span></div>
                <h1 style={{fontWeight: '600', fontSize: '48px', lineHeight: '58px', color: '#212121'}}>나가자!</h1>
                <div><span style={{fontWeight: '400', fontSize: '18px', lineHeight: '24px', color: '#757575'}}>분야별 리뷰 AI 요약 시스템</span></div>
            </div>
            <CategoryLinkButtons />
        </div>
    )
}