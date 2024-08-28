import { Link } from 'react-router-dom';

function ScrapFolders() {
    const folders = [
        { name: 'movie', label: '나의 영화 목록' },
        { name: 'place', label: '나의 장소 목록' },
        { name: 'restaurant', label: '나의 식음료 목록' },
        { name: 'exhibition', label: '나의 전시 목록' },
    ];

    return (
        <div className="folders">
            {folders.map((folder) => (
                <div className="folder" key={folder.name}>
                    <Link to={`/scrap/list/${folder.name}`}>
                        <span role="img" aria-label="folder">📁</span>
                        <p>{folder.label}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default ScrapFolders;
