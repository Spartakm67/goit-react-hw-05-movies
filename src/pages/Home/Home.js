// import Cat from '../../images/Cat.png';
import { getTrendingMovies } from '../../services/getDATA'; 
import { useState, useEffect } from 'react';
// import {  Outlet } from 'react-router-dom';
import { MoviesList } from '../../components/MoviesList/MoviesList';

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
    
    // return (
    
    // <>Home page
    //     <img src={Cat} alt="cat" width="370" />
    // </>
     return (
        
         <main>
         <h3>Tranding today</h3>
             <MoviesList movies={movies} />
             
    </main>
  );

};

export default Home;