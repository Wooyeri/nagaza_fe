import { useContext, useEffect, useState } from 'react';
import MyListDetail from './listDetail/MyListDetail';
import { ThemeContext } from "@/common/Context"
import { getLikeList } from '@/services/likeServices';

import { lightPallete, darkPallete } from "../../assets/pallete";
import './scrapList.css';

export default function LikeList() {
  const { darkMode } = useContext(ThemeContext);
  const [ likeItems, setLikeItems ] = useState([]);
  const categories = ['movie', 'hotel', 'restaurant'];

  useEffect(() => {
    categories.map((category) => {
      getLikeList(category, sessionStorage.getItem('jwtToken'))
      .then(res => {
        if (res.status == 200 && res.data && res.data.length > 0) {setLikeItems([...likeItems, res.data]);}
      })
      .catch(err => console.error(err));
    })

  }, [likeItems])

  return (
    <div style={{width: "70%", display: "flex", flexDirection: "column", alignItems: "center"}}>
      <div style={{display: "flex", flexDirection: "column"}}>
        {/*Todo: key를 id로 교체해야함*/}
        {likeItems ? <p style={{fontSize: "1.5rem" ,color: darkMode ? darkPallete.plainText : lightPallete.plainText}}>❤️를 눌러 좋아하는 항목을 저장하세요.</p> : likeItems.map((contents, idx) => <MyListDetail key={idx} contents={contents} />)}
        </div>
    </div>
  );
}
