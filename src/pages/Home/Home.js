// import Cat from '../../images/Cat.png';
import { getTrendingMovies } from '../../services/getDATA'; 
import { useState, useEffect } from 'react';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import { HeaderTrands } from './Home.styled';
import Notiflix from 'notiflix';

const Home = () => {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {

    //     if (movies) {
    //         return Notiflix.Notify.success(
    //     `Hi again!`
    //   );
    //     }
        getTrendingMovies()
            .then(data => {
                setMovies(data.results);
                Notiflix.Notify.success(
        `Hi!`
      );
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    
    return (
        
         <main>
         <HeaderTrands>Tranding today</HeaderTrands>
             <MoviesList movies={movies} />
             
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

export default Home;