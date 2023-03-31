import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CastItem, CastList, Character, Name } from './Cast.styled';
import Notiflix from 'notiflix';
import { getMovieCredits } from '../../services/getDATA'; 
import DefaultImage from '../../images/DefaultImage.png'; 

const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useParams();

 useEffect(() => {
    async function getCasts() {
      try {
        getMovieCredits(movieId).then(data => {
          setMovieCast(data.cast);
          
        });
      } catch (err) {
        Notiflix.Notify.failure(err);
      }
    }
    getCasts();
 }, [movieId]);
    
 return (
    <CastList>
      {movieCast.length > 0
        ? movieCast.map(({ id, name, profile_path, character }) => (
            <CastItem key={id}>
              <img
                src={profile_path
                    ? `https://image.tmdb.org/t/p/w200${profile_path}`
                        : DefaultImage}
                alt="actor"
                loading="lazy"
                width={150}
                // height={200}
              />
              <Name>{name}</Name>
              <Character> Character: {character}</Character>
            </CastItem>
          ))
             : 'There is no information about cast members'}
    </CastList>
  );
};

Notiflix.Notify.init({
  width: '420px',
  position: 'center-top',
  distance: '100px',
  timeout: 2000,
  fontSize: '20px',
});

export default Cast;