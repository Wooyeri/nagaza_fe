import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from "@/common/Context";
import MyListDetail from './listDetail/MyListDetail';

import { lightPallete, darkPallete } from '@/assets/pallete';
import './scrapList.css';

import { getScrapeList } from '../../services/scrapeServices';

function ScrapList() {
  const { darkMode } = useContext(ThemeContext);
  const [selected, setSelected] = useState('');
  const [scrapedItems, setScrapedItems] = useState([]);
  const [label, setLabel] = useState('');
  const folders = [
      { name: 'movie', label: '나의 영화 목록' },
      { name: 'place', label: '나의 장소 목록' },
      { name: 'restaurant', label: '나의 식당 목록' }
  ];

  useEffect(() => {
    if (selected) getScrapeList(selected, sessionStorage.getItem('jwtToken'))
    .then(res => {
      if (res.status == 200 && res.data && res.data.length > 0) {setScrapedItems([...scrapedItems, res.data]);}
    })
    .catch(err => console.error(err));

  }, [scrapedItems])

  return (
    <div style={{width: "70%", display: "flex", flexDirection: "column", alignItems: "center"}}>
      <div className="folders" style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr"}}>
          {folders.map((folder) => (
              <div className={`folder ${selected === folder.name? 'selected' : ''} ${darkMode ? 'dark' : 'plain'}`} key={folder.name} onClick={() => {setSelected(folder.name); setLabel(folder.label)}}>
                  <span role="img" aria-label="folder">📁</span>
                  <p>{folder.label}</p>
              </div>
          ))}
      </div>
      <div style={{display: "flex", flexDirection: "column"}}>
        <h1 style={{marginBottom: "1rem", marginLeft: "1.3rem", color: darkMode ? darkPallete.plainText : lightPallete.plainText}}>{label}</h1>
        {/*Todo: key를 id로 교체해야함*/}
        {selected && scrapedItems && scrapedItems.map((contents, idx) => <MyListDetail key={idx} contents={contents} />)}
        </div>
    </div>
  );
}

export default ScrapList;
