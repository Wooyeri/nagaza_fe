import { Link } from 'react-router-dom';

const buttonStyle = {
    width: '60px',
    height: '60px',
    borderRadius: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    margin: '0 60px',
    fontSize: '30px' // 아이콘 크기 조정
};

const buttonFont = {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '16px',
    marginTop: '15px'
};

export default function HeartScrapButtons() {
    return (
        <div className="category-btns" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '60px' }}>
            <div className="like">
                <Link to={"/lists/like"}>
                    <div className="category-btn" style={buttonStyle}>
                        <span role="img" aria-label="like">💜</span>
                    </div>
                </Link>
                <div style={buttonFont}>좋아요</div>
            </div>
            <div className="scrap">
                <Link to={"/scrap/list"}>
                    <div className="category-btn" style={buttonStyle}>
                        <span role="img" aria-label="scribble">📋</span>
                    </div>
                </Link>
                <div style={buttonFont}>스크랩</div>
            </div>
        </div>
    );
}
