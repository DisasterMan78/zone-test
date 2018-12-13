import {
  REQUEST_NOW_PLAYING,
  RECEIVE_NOW_PLAYING,
  REQUEST_GENRES,
  RECEIVE_GENRES,
  SET_MINIMUM_RATING,
  SET_ACTIVE_GENRES,
} from '../actions';

export const initialState = {
  ratingMinimum: 0,
  loading: false,
  genresLoading: false,
  genreNames: {},
  activeGenres: [],
};


const reducer = (state = initialState, action) => {
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

      const activeGenres = Object.keys(genresKeyed).map(key => parseInt(key, 10));

      return {
        ...state,
        genreNames: genresKeyed,
        genresLoading: false,
        activeGenres,
      };
    }

    case SET_MINIMUM_RATING: {
      return {
        ...state,
        ratingMinimum: action.results.value,
      };
    }

    case SET_ACTIVE_GENRES: {
      const { genre, value } = action.results;
      const activeGenres = [...state.activeGenres];
      if (value === true && state.activeGenres.includes(genre) === false) {
        activeGenres.push(genre);
      }

      if (value === false && activeGenres.includes(genre)) {
        const genreIndex = activeGenres.indexOf(genre);
        activeGenres.splice(genreIndex, 1);
      }

      return {
        ...state,
        activeGenres,
      };
    }

    default:
      return state;
  }
};

export default reducer;
