import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CastItem, CastList, Character, Name, CastImg } from './Cast.styled';
import Notiflix from 'notiflix';
import { getMovieCredits } from '../../services/getDATA'; 
import defaultImage from '../../images/defaultImage.png'; 

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
              <CastImg
                src={profile_path
                    ? `https://image.tmdb.org/t/p/w200${profile_path}`
                        : defaultImage}
                alt="actor"
                loading="lazy"
                width={150}
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
  distance: '10px',
  timeout: 1500,
  fontSize: '20px',
});

export default Cast;