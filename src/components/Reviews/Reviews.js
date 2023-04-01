import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Notiflix from 'notiflix';
import { getMovieReviews } from '../../services/getDATA'; 

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
     async function getReviews() {
      try {
          getMovieReviews(movieId).then(data => {
              setReviews(data.results);
          });
          } catch (err) {
        Notiflix.Notify.failure(err);
      }
    }
      getReviews(movieId);
  }, [movieId]);

  return (
    <ul>
      {reviews.length > 0
        ? reviews.map(({ author, content, id }) => (
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          ))
              : Notiflix.Notify.warning(
                  "There are not any reviews for this movie")}
    </ul>
  );
};

Notiflix.Notify.init({
  width: '420px',
  position: 'center-top',
  distance: '10px',
  timeout: 1500,
  fontSize: '20px',
});

export default Reviews;
