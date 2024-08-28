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
            {data && data.map((movie) => 
                <ListMovieCard key={Number(movie.id)} id={movie.id} likeCount={movie.likeCount} title={movie.title} posterUrl={movie.posterUrl} cast={movie.cast} reserRate={movie.genre} emotionRating={movie.emotionRating ? Number(movie.emotionRating) : null} aiReview={movie.emotionRating != null}/>
            )}
        </div>
    )
}
ListMovie.propTypes = {
    data: PropTypes.array
}