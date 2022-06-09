import axios from 'axios';

export const API_KEY = 'fdf0e898687a376156944fbb1ab25196';
// Запит трендових фільмів
export async function fetchTrending(page = 1, media_type = 'movie', time_window = 'day') {
  const { data } = await axios(`https://api.themoviedb.org/3/trending/${media_type}/${time_window}?api_key=${API_KEY}&page=${page}`);
  return data;
}
// Запит пошуку фільмів
export async function fetchMoviesByQuery(query, page = 1, language = 'en-US') {
  const { data } = await axios(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=${language}&query=${query}&page=${page}`);
  return data;
}
// Запит основної інформації про фільм за його ідентифікатором
export async function fetchMovieById(movie_id, language = 'en-US') {
  const { data } = await axios(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=${language}`);
  return data;
}
// Запит акторського складу та знімальної групи фільму за ідентифікатором
export async function fetchCreditsByMovieId(movie_id, language = 'en-US') {
  const { data } = await axios(`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${API_KEY}&language=${language}`);
  return data;
}
// Запит рецензії фільму за ідентифікатором
export async function fetchReviewsByMovieId(movie_id, page = 1, language = 'en-US') {
  const { data } = await axios(`https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=${API_KEY}&language=${language}&page=${page}`);
  return data;
}
