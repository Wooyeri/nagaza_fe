import PropTypes from 'prop-types';
import ListMovieCard from './card/ListMovieCard';

export default function ListMovie({data}){
    return(
        <div className="card-list">
            {data && data.map( (movie, idx) => 
                <ListMovieCard key={idx} likes={movie.likes} title={movie.title} poster_url={movie.poster_url} location={movie.location} rating={movie.rating} emotion_rating={Number(movie.emotion_rating)} ai_review={JSON.parse(movie.ai_review)}/>
            )}
        </div>
    )
}
ListMovie.propTypes = {
    data: PropTypes.array
}