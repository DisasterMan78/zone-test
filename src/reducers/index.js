import {
  REQUEST_NOW_PLAYING,
  RECEIVE_NOW_PLAYING,
  REQUEST_GENRES,
  RECEIVE_GENRES,
} from '../actions';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_NOW_PLAYING:
      return { ...state, loading: true };

    case RECEIVE_NOW_PLAYING: {
      const movies = action.results;

      return {
        ...state,
        movies,
        loading: false,
        genres: [...new Set(
          movies.reduce((accumulator, currentValue) => {
            const accumulated = accumulator.concat(currentValue.genre_ids);
            return accumulated;
          }, []),
        )],
      };
    }
    case REQUEST_GENRES:
      return { ...state, genresLoading: true };

    case RECEIVE_GENRES: {
      const genreNames = action.results;
      const genresKeyed = {};
      genreNames.forEach((genre) => {
        genresKeyed[genre.id] = genre.name;
      });

      return {
        ...state,
        genreNames: genresKeyed,
        genresLoading: false,
      };
    }

    default:
      return state;
  }
};

export default reducer;
