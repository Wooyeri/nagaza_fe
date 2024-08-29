import MyListDetail from './listDetail/MyListDetail';
import { useEffect, useState } from 'react';
import { getLikeList } from '@/services/likeServices';
import { testHotel } from '../testData';

import './scrapList.css';

export default function LikeList() {
  const [ likeList, setLikeList ] = useState([]);
  const categories = ['movie', 'hotel', 'restaurant'];

  const tempData =  [
    testHotel[0], testHotel[1]
  ]

  useEffect(() => {
    categories.map((category) => {
      getLikeList(category, sessionStorage.getItem('jwtToken'))
      .then(res => {
        if (res.status == 200 && res.data && res.data.length > 0) {setLikeList([...likeList, res.data]);}
      })
      .catch(err => console.error(err));
    })

  }, [likeList])

  return (
    <div style={{width: "70%", display: "flex", flexDirection: "column", alignItems: "center"}}>
      <div style={{display: "flex", flexDirection: "column"}}>
        {/*Todo: key를 id로 교체해야함*/}
        {tempData && tempData.map((contents, idx) => <MyListDetail key={idx} contents={contents} />)}
        </div>
    </div>
  );
}
