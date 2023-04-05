import { MovieName, MovieLi, MovieLink } from './MoviesList.styled';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map(movie => (
        <MovieLi key={movie.id}>
         <nav>
          <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
            <MovieName>{movie.title} ({movie.release_date.slice(0, 4)})</MovieName>
          </MovieLink>
         </nav>
        </MovieLi>
      ))}
    </ul>
  );
};


MoviesList.propTypes = {
  movies: PropTypes.array
}