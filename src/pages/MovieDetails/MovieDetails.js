import Notiflix from 'notiflix';import { useParams, useLocation, Outlet } from 'react-router-dom';
import { BackLink } from '../../components/BackLink/BackLink';
import { Suspense } from 'react';
import { getMovieDetails } from '../../services/getDATA'; 
import Cat from '../../images/Cat.png';

import {
  GenresList,
  DataBox,
  MovieBox,
  MovieData,
  Title,
  DataLi,
    DataLink,
  DataImg,
} from './MovieDetails.styled';

import { useState, useEffect } from 'react';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

    useEffect(() => {
      function getDetails() {
        
      try {
        getMovieDetails(movieId).then(data => {
          setMovie(data);
        });
      } catch (err) {
        Notiflix.Notify.failure(err);
      }
    }
    getDetails();
  }, [movieId]);

  const { original_title, overview, genres, poster_path, vote_average } = movie;
  const score = vote_average * 10;
  const scoreToFixed = score.toFixed(0);

  return (
    <main>
      <BackLink to={backLinkHref}>Back to movies</BackLink>
      <MovieBox>
        <DataImg
          src={poster_path ? `https://image.tmdb.org/t/p/w300${poster_path}` : Cat}
          alt={original_title}
        />
        <MovieData>
          <Title>{original_title}</Title>
          <h3>User score: {scoreToFixed}%</h3>
          <h3>Overview</h3>
          <p>{overview} </p>
          <h3>Genres</h3>
          <GenresList>
            {genres &&
              genres.length &&
              genres.map(({ id, name }) => <li key={id}>{name}</li>)}
          </GenresList>
        </MovieData>
      </MovieBox>

      <DataBox>
        <h4>Additional information</h4>
        <ul>
          <DataLi>
            <DataLink to="cast" state={{ ...location.state }}>
              {' '}
              Cast
            </DataLink>
          </DataLi>
          <DataLi>
            <DataLink to="reviews" state={{ ...location.state }}>
              {' '}
              Reviews
            </DataLink>
          </DataLi>
        </ul>
      </DataBox>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

Notiflix.Notify.init({
  width: '550px',
  position: 'center-top',
  distance: '10px',
  timeout: 1000,
  fontSize: '20px',
});

export default MovieDetails;
