// import Cat from '../../images/Cat.png';
import { getTrendingMovies } from '../../services/getDATA'; 
import { useState, useEffect } from 'react';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import { HeaderTrands } from './Home.styled';

const Home = () => {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        getTrendingMovies()
            .then(data => {
                setMovies(data.results);
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

export default Home;