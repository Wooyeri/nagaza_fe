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
                <ListCard key={hotel.id} id={hotel.id} category={category} likeCount={hotel.likeCount} name={hotel.name} posterUrl={hotel.posterUrl} optional={hotel.location} emotionRating={hotel.emotionRating ? Number(hotel.emotionRating) : null} aiReview={hotel.emotionRating != null}/>
            ) : data.map(restaurant => 
                <ListCard key={restaurant.id} id={restaurant.id} category={category}  likeCount={restaurant.likeCount} name={restaurant.name} posterUrl={restaurant.posterUrl} optional={restaurant.foodType} emotionRating={restaurant.emotionRating ? Number(restaurant.emotionRating) : null} aiReview={restaurant.emotionRating != null}/>
            )}
        </div>
    )
}
ListPlain.propTypes = {
    data: PropTypes.array,
    category: PropTypes.string
}