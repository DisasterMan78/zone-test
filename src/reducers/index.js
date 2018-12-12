import { REQUEST_NOW_PLAYING, RECEIVE_NOW_PLAYING } from '../actions';

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

    default:
      return state;
  }
};

export default reducer;
