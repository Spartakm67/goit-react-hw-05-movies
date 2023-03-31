import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import { getMovies } from '../../services/getDATA'; 
import { Input } from './Movies.styled';
import Notiflix from 'notiflix';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const name = searchParams.get('name');
 
    
  const formSubmit = event => {
    event.preventDefault();
    const movieName = event.target.name.value;

    if (movieName.trim() === '') {
      Notiflix.Notify.warning(
        `Please enter search data`
      );
      return;
    }
    setSearchParams({ name: movieName });
    event.target.reset();
  };
    
  useEffect(() => {
   
    async function getEffectMovies() {
      getMovies(name)
        .then(data => {
          setMovies(data.results);
          if (data.results.length > 0) {
            Notiflix.Notify.success(
              `We have found the ${data.results.length} movies by your request`
            );
          } else {
            Notiflix.Notify.failure(
              'Sorry, we have not found any movies for you...please, try again!'
            );
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
      if (name) {
        getEffectMovies();
      }
  }, [name]);
  
  return (
    <main>
      <div>
        <form onSubmit={formSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="enter movie name "
          />
          <button type="submit">Search</button>
        </form>
        <MoviesList movies={movies} />
      </div>
    </main>
  );
};

Notiflix.Notify.init({
  width: '550px',
  position: 'center-top',
  distance: '10px',
  timeout: 1500,
  fontSize: '20px',
});

export default Movies;