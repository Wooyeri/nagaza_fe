import HeartScrapButtons from './HeartScrapButtons';
import './scrapList.css';
import ScrapFolders from './ScrapFolders';

function ScrapList() {
  return (
    <div className="content">
      <HeartScrapButtons/>

      <ScrapFolders/>
    </div>
  );
}

export default ScrapList;
