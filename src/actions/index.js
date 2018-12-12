/* globals fetch */

const API_URL = 'https://api.themoviedb.org/3';
export const REQUEST_NOW_PLAYING = 'REQUEST_NOW_PLAYING';
export const RECEIVE_NOW_PLAYING = 'RECEIVE_NOW_PLAYING';

const API_KEY = '1c39fff5640c6fb0f3dc3684488005bd';

export const requestMovies = () => ({
  type: REQUEST_NOW_PLAYING,
});

export const receivedMovies = json => ({
  type: RECEIVE_NOW_PLAYING,
  results: json.results,
});

export function fetchMovies() {
  return function (dispatch) {
    dispatch(requestMovies());
    return fetch(`${API_URL}/movie/now_playing?api_key=${API_KEY}`)
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error),
      )
      .then((json) => {
        dispatch(receivedMovies(json));
      });
  };
}
