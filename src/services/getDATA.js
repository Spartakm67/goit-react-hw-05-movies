import axios from 'axios';
import { BASE_URL, KEY_API } from './baseURL';

//***The list of the most popular Movies for Today to create a collection on the Main Page
export async function getTrendingMovies() {
const { data } =
    await axios.get(`${BASE_URL}trending/movie/day?api_key=${KEY_API}
`);
  return data;
};

// ***Searching for a movie by keyword on the movies page
export async function getMovies(searchValue) {
  const { data } =
    await axios.get(`${BASE_URL}/search/movie?api_key=${KEY_API}&page=1&query=${searchValue}
`);
  return data;
};

// ***The request of full movie information for a movie page
export async function getMovieDetails(id) {
  const { data } = await axios.get(`${BASE_URL}/movie/${id}?api_key=${KEY_API}
`);
  return data;
};

// ***The request of cast information for a movie page
export async function getMovieCredits(id) {
  const { data } =
    await axios.get(`${BASE_URL}/movie/${id}/credits?api_key=${KEY_API}
`);
  return data;
};

// ***The request of reviews for a movie page
export async function getMovieReviews(id) {
  const { data } =
    await axios.get(`${BASE_URL}/movie/${id}/reviews?api_key=${KEY_API}
`);
  return data;
};
