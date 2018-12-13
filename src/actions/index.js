/* globals fetch */

const API_URL = 'https://api.themoviedb.org/3';

const API_KEY = '1c39fff5640c6fb0f3dc3684488005bd';

function fetchApi(dispatch, endpoint, request, received) {
  dispatch(request());

  return fetch(`${API_URL}${endpoint}?api_key=${API_KEY}`)
    .then(
      response => response.json(),
      error => console.log('An error occurred.', error),
    )
    .then((json) => {
      dispatch(received(json));
    });
}


const genresEndpoint = '/genre/movie/list';

export const REQUEST_GENRES = 'REQUEST_GENRES';
export const RECEIVE_GENRES = 'RECEIVE_GENRES';

export const requestGenres = () => ({
  type: REQUEST_GENRES,
});

export const receivedGenres = json => ({
  type: RECEIVE_GENRES,
  results: json.genres,
});

export function fetchGenres() {
  return (dispatch) => {
    fetchApi(dispatch, genresEndpoint, requestGenres, receivedGenres);
  };
}


const moviesEndpoint = '/movie/now_playing';

export const REQUEST_NOW_PLAYING = 'REQUEST_NOW_PLAYING';
export const RECEIVE_NOW_PLAYING = 'RECEIVE_NOW_PLAYING';

export const requestMovies = () => ({
  type: REQUEST_NOW_PLAYING,
});

export const receivedMovies = json => ({
  type: RECEIVE_NOW_PLAYING,
  results: json.results,
});

export function fetchMovies() {
  return (dispatch) => {
    fetchApi(dispatch, moviesEndpoint, requestMovies, receivedMovies);
  };
}


export const SET_MINIMUM_RATING = 'SET_MINIMUM_RATING';

export const changedRating = value => ({
  type: SET_MINIMUM_RATING,
  results: value,
});

export function setMinimumRating(value) {
  return (dispatch) => {
    dispatch(changedRating(value));
  };
}
