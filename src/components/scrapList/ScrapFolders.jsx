import { useState } from 'react';

function ScrapFolders() {
    const [selected, setSelected] = useState('');
    const folders = [
        { name: 'movie', label: '나의 영화 목록' },
        { name: 'place', label: '나의 장소 목록' },
        { name: 'restaurant', label: '나의 식음료 목록' },
        { name: 'exhibition', label: '나의 전시 목록' },
    ];

    return (
        <div>
            <div className="folders">
                {folders.map((folder) => (
                    <div className={`folder ${selected === folder.name? 'selected' : ''}`} key={folder.name} onClick={() => {setSelected(folder.name)}}>
                        <span role="img" aria-label="folder">📁</span>
                        <p>{folder.label}</p>
                    </div>
                ))}
            </div>
            <div></div>
        </div>
    );
}

export default ScrapFolders;
