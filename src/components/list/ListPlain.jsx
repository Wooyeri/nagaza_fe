import PropTypes from 'prop-types';
import ListCard from "./card/ListCard"

export default function ListPlain({data, category}){
    const styles = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        placeItems: 'center',
        gap: '50px',
        width: '80%',
    };
    return(
        <div className="card-list" style={styles}>
            {data && category === 'hotel' ?
            data.map(hotel => 
                <ListCard key={hotel.id} likeCount={hotel.likeCount} name={hotel.name} posterUrl={hotel.posterUrl} optional={hotel.location} emotionRating={Number(hotel.emotionRating)} aiReview={JSON.parse(!(hotel.likeCount == null))}/>
            ) : data.map((restaurant, idx) => 
                <ListCard key={idx} likeCount={restaurant.likeCount} name={restaurant.name} posterUrl={restaurant.posterUrl} optional={restaurant.foodType} emotionRating={Number(restaurant.emotionRating)} aiReview={!(restaurant.likeCount == null)}/>
            )}
        </div>
    )
}
ListPlain.propTypes = {
    data: PropTypes.array,
    category: PropTypes.string
}