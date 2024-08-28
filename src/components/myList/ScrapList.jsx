import { useState } from 'react';
import './scrapList.css';
import ScrapDetail from './listDetail/ScrapDetail';
import { testHotel } from '../testData';

function ScrapList() {
  const [selected, setSelected] = useState('');
  const [label, setLabel] = useState('');
  const folders = [
      { name: 'movie', label: '나의 영화 목록' },
      { name: 'place', label: '나의 장소 목록' },
      { name: 'restaurant', label: '나의 식당 목록' }
  ];
  const listInFolder = [
    testHotel[0], testHotel[1]
  ]

  return (
    <div style={{width: "70%", display: "flex", flexDirection: "column", alignItems: "center"}}>
      <div className="folders" style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr"}}>
          {folders.map((folder) => (
              <div className={`folder ${selected === folder.name? 'selected' : ''}`} key={folder.name} onClick={() => {setSelected(folder.name); setLabel(folder.label)}}>
                  <span role="img" aria-label="folder">📁</span>
                  <p>{folder.label}</p>
              </div>
          ))}
      </div>
      <div style={{display: "flex", flexDirection: "column"}}>
        <h1 style={{marginBottom: "1rem", marginLeft: "1.3rem"}}>{label}</h1>
        {/*Todo: key를 id로 교체해야함*/}
        {selected && listInFolder.map((contents, idx) => <ScrapDetail key={idx} contents={contents} />)}
        </div>
    </div>
  );
}

export default ScrapList;
