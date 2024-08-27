import PropTypes from 'prop-types';
import ListCard from "./card/ListCard"

export default function ListPlain({data}){
    const styles = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        placeItems: 'center',
        gap: '50px',
        width: '80%',
    };
    return(
        <div className="card-list" style={styles}>
            {data && data.map( (item, idx) => 
                <ListCard key={idx} likes={item.likes} title={item.title} poster_url={item.poster_url} location={item.location} rating={item.rating} emotion_rating={Number(item.emotion_rating)} ai_review={JSON.parse(item.ai_review)}/>
            )}
        </div>
    )
}
ListPlain.propTypes = {
    data: PropTypes.array
}