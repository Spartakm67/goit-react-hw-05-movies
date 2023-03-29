import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import { getMovies } from '../../services/getDATA'; 

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [name, setName] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const movieName = searchParams.get('name') ?? '';

    getMovies(movieName)
            .then(data => {
                setMovies(data.results);
            })
            .catch(error => {
                console.log(error);
            });
    
  const formSubmit = event => {
    event.preventDefault();
    const movieName = event.target.name.value;

    if (movieName.trim() === '') {
      alert('Please enter name');
      return;
    }

    if (movieName === '') {
      return setSearchParams({});
    }
    setSearchParams({ name: movieName });

    getMovies(movieName);
    setName('');
  };

  const handleChange = event => {
    setName(event.currentTarget.value);
  };

  useEffect(() => {
    if (movieName === '') {
      setSearchParams({});
    }
  }, [movieName, setSearchParams]);


  useEffect(() => {
    if (movies === []) {
      return;
    }
    getMovies(movieName);
    
  }, [movies, movieName]);
  
  return (
    <main>
      <div>
        <form onSubmit={formSubmit}>
          <input
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

export default Movies;