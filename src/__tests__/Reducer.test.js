/* globals describe, test, expect */
/* eslint no-useless-escape: 0 */

import reducer, { initialState } from '../reducers';
import {
  REQUEST_NOW_PLAYING,
  RECEIVE_NOW_PLAYING,
  REQUEST_GENRES,
  RECEIVE_GENRES,
  SET_MINIMUM_RATING,
  SET_ACTIVE_GENRES,
} from '../actions';

describe('INITIAL_STATE', () => {
  test('is correct', () => {
    const action = { type: 'dummy_action' };
    const undefinedReducer = reducer(undefined, action);

    expect(undefinedReducer).toEqual(initialState);
  });
});

describe('REQUEST_NOW_PLAYING', () => {
  test('returns the correct state', () => {
    const action = {
      type: REQUEST_NOW_PLAYING,
      results: {},
    };
    const expectedState = {
      loading: true,
      genresLoading: false,
      ratingMinimum: 0,
      genreNames: {},
      activeGenres: [],
    };

    expect(reducer(undefined, action)).toEqual(expectedState);
  });
});

// JSON.parse is used too ensure the results are as accurate as possible to what is
// received from the server
// eslint rule 'no-useless-escape' rule suspended to enable accurate reproduction
describe('RECEIVE_NOW_PLAYING', () => {
  test('returns the correct state', () => {
    const action = {
      type: RECEIVE_NOW_PLAYING,
      results: JSON.parse('[{"vote_count":3036,"id":335983,"video":false,"vote_average":6.5,"title":"Venom","popularity":369.38,"poster_path":"\/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg","original_language":"en","original_title":"Venom","genre_ids":[878],"backdrop_path":"\/VuukZLgaCrho2Ar8Scl9HtV3yD.jpg","adult":false,"overview":"Eddie Brock is...","release_date":"2018-10-03"},{"vote_count":2008,"id":338952,"video":false,"vote_average":7,"title":"Fantastic Beasts: The Crimes of Grindelwald","popularity":209.101,"poster_path":"\/uyJgTzAsp3Za2TaPiZt2yaKYRIR.jpg","original_language":"en","original_title":"Fantastic Beasts: The Crimes of Grindelwald","genre_ids":[10751,14,12],"backdrop_path":"\/xgbeBCjmFpRYHDF7tQ7U98EREWp.jpg","adult":false,"overview":"Gellert Grindelwald has ...","release_date":"2018-11-14"}]'),
    };
    const expectedState = {
      genres: [878, 10751, 14, 12],
      loading: false,
      genresLoading: false,
      movies: [
        {
          adult: false,
          backdrop_path: '/VuukZLgaCrho2Ar8Scl9HtV3yD.jpg',
          genre_ids: [878],
          id: 335983,
          original_language: 'en',
          original_title: 'Venom',
          overview: 'Eddie Brock is...',
          popularity: 369.38,
          poster_path: '/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg',
          release_date: '2018-10-03',
          title: 'Venom',
          video: false,
          vote_average: 6.5,
          vote_count: 3036,
        },
        {
          adult: false,
          backdrop_path: '/xgbeBCjmFpRYHDF7tQ7U98EREWp.jpg',
          genre_ids: [10751, 14, 12],
          id: 338952,
          original_language: 'en',
          original_title: 'Fantastic Beasts: The Crimes of Grindelwald',
          overview: 'Gellert Grindelwald has ...',
          popularity: 209.101,
          poster_path: '/uyJgTzAsp3Za2TaPiZt2yaKYRIR.jpg',
          release_date: '2018-11-14',
          title: 'Fantastic Beasts: The Crimes of Grindelwald',
          video: false,
          vote_average: 7,
          vote_count: 2008,
        },
      ],
      ratingMinimum: 0,
      genreNames: {},
      activeGenres: [],
    };

    expect(reducer(undefined, action)).toEqual(expectedState);
  });
});


describe('REQUEST_GENRES', () => {
  test('returns the correct state', () => {
    const action = {
      type: REQUEST_GENRES,
      results: {},
    };
    const expectedState = {
      ratingMinimum: 0,
      loading: false,
      genresLoading: true,
      genreNames: {},
      activeGenres: [],
    };

    expect(reducer(undefined, action)).toEqual(expectedState);
  });
});

describe('RECEIVE_GENRES', () => {
  test('returns the correct state', () => {
    const action = {
      type: RECEIVE_GENRES,
      results: JSON.parse('[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"}]'),
    };
    const expectedState = {
      genreNames: {
        12: 'Adventure',
        16: 'Animation',
        28: 'Action',
        35: 'Comedy',
      },
      activeGenres: [12, 16, 28, 35],
      genresLoading: false,
      loading: false,
      genresLoading: false,
      ratingMinimum: 0,
    };

    expect(reducer(undefined, action)).toEqual(expectedState);
  });
});


describe('SET_MINIMUM_RATING', () => {
  test('returns the correct state', () => {
    const action = {
      type: SET_MINIMUM_RATING,
      results: { value: 5 },
    };
    const expectedState = {
      ratingMinimum: 5,
      loading: false,
      genresLoading: false,
      genreNames: {},
      activeGenres: [],
    };

    expect(reducer(undefined, action)).toEqual(expectedState);
  });
});

describe('SET_ACTIVE_GENRES', () => {
  test('returns the correct state when removing a genre', () => {
    const localInitialState = {
      ...initialState,
      activeGenres: [1, 2, 3, 4, 5],
    };
    const action = {
      type: SET_ACTIVE_GENRES,
      results: { genre: 3, value: false },
    };
    const expectedState = {
      ratingMinimum: 0,
      loading: false,
      genresLoading: false,
      genreNames: {},
      activeGenres: [1, 2, 4, 5],
    };

    expect(reducer(localInitialState, action)).toEqual(expectedState);
  });

  test('returns the correct state when adding a genre', () => {
    const localInitialState = {
      ...initialState,
      activeGenres: [1, 2, 3, 4, 5],
    };
    const action = {
      type: SET_ACTIVE_GENRES,
      results: { genre: 6, value: true },
    };
    const expectedState = {
      ratingMinimum: 0,
      loading: false,
      genresLoading: false,
      genreNames: {},
      activeGenres: [1, 2, 3, 4, 5, 6],
    };

    expect(reducer(localInitialState, action)).toEqual(expectedState);
  });
});
