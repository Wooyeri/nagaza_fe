import './scrapList.css';
import LikeDetail from './listDetail/LikeDetail';
import { testHotel } from '../testData';

export default function LikeList() {
  //Todo: BE에서 가져오기
  const likeLists = [
    testHotel[0], testHotel[1]
  ]

  return (
    <div style={{width: "70%", display: "flex", flexDirection: "column", alignItems: "center"}}>
      <div style={{display: "flex", flexDirection: "column"}}>
        {/*Todo: key를 id로 교체해야함*/}
        {likeLists.map((contents, idx) => <LikeDetail key={idx} contents={contents} />)}
        </div>
    </div>
  );
}
