import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import { getMovies } from '../../services/getDATA'; 
import { Input } from './Movies.styled';
import Notiflix from 'notiflix';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [name, setName] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const movieName = searchParams.get('name') ?? '';

    // getMovies(movieName)
    //         .then(data => {
    //           setMovies(data.results);
    //           if (data.results.length > 0) {
    //         Notiflix.Notify.success(
    //           `We have found the movies most relevant to your request`
    //         );
    //       } else {
    //         Notiflix.Notify.failure(
    //           'Sorry, we have not found any movies for you...please, try again!'
    //         );
    //       }
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    
  const formSubmit = event => {
    event.preventDefault();
    const movieName = event.target.name.value;

    if (movieName.trim() === '') {
      Notiflix.Notify.warning(
              `Please enter search data`
            );
            return;
    }
    
    if (movieName === '') {
      return setSearchParams({});
    }
    setSearchParams({ name: movieName });

    getMovies(movieName)
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
    setName('');
  };

  const handleChange = event => {
    setName(event.currentTarget.value);
  };

  // useEffect(() => {
  //   if (movieName === '') {
  //     setSearchParams({});
  //   }
  // }, [movieName, setSearchParams]);


  useEffect(() => {
    if (movies === []) {
      return;
    }
    getMovies(movieName);
    
  }, [movies, movieName, setSearchParams]);
  
  return (
    <main>
      <div>
        <form onSubmit={formSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="enter movie name "
            value={name}
            onChange={handleChange}
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
  distance: '100px',
  timeout: 2000,
  fontSize: '20px',
});

export default Movies;