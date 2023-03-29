import { MovieName, MovieLi, MovieLink } from './MoviesList.styled';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map(movie => (
        <MovieLi key={movie.id}>
          <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
            <MovieName>{movie.title}</MovieName>
          </MovieLink>
        </MovieLi>
      ))}
    </ul>
  );
};


MoviesList.propTypes = {
  movies: PropTypes.array
}