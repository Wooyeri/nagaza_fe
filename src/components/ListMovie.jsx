import PropTypes from 'prop-types';
import ListMovieCard from './card/ListMovieCard';

export default function ListMovie({data}){
    const styles = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(530px, 1fr))',
        placeItems: 'center',
        gap: '50px',
        width: '80%',
    };
    return(
        <div className="card-list" style={styles}>
            {data && data.map( (movie, idx) => 
                <ListMovieCard key={idx} likes={movie.likes} title={movie.title} poster_url={movie.poster_url} genre={movie.genre} cast={movie.cast} emotion_rating={Number(movie.emotion_rating)} ai_review={JSON.parse(movie.ai_review)}/>
            )}
        </div>
    )
}
ListMovie.propTypes = {
    data: PropTypes.array
}