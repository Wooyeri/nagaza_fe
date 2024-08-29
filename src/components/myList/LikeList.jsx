import './scrapList.css';
import LikeDetail from './listDetail/LikeDetail';
import { useEffect, useState } from 'react';
import { getLikeList } from '@/services/likeServices';

export default function LikeList() {
  const [ likeList, setLikeList ] = useState([]);
  const categories = ['movie', 'hotel', 'restaurant'];

  useEffect(() => {
    categories.map((category) => {
      getLikeList(category, sessionStorage.getItem('jwtToken'))
      .then(res => {
        if (res.data && res.data.length > 0) setLikeList([...likeList, res.data]);
      })
      .catch(err => console.error(err));
    })

  }, [likeList])

  return (
    <div style={{width: "70%", display: "flex", flexDirection: "column", alignItems: "center"}}>
      <div style={{display: "flex", flexDirection: "column"}}>
        {/*Todo: key를 id로 교체해야함*/}
        {likeList && likeList.map((contents, idx) => <LikeDetail key={idx} contents={contents} />)}
        </div>
    </div>
  );
}
