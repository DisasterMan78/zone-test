/* globals describe, afterEach, test, expect */

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore();

describe('async actions', () => {
  afterEach(() => {
    store.clearActions();
  });

  test('Dispatches the correct action and payload', () => {
    const expectedActions = [
      {
        type: 'REQUEST_NOW_PLAYING',
      },
    ];

    store.dispatch(actions.fetchMovies());
    expect(store.getActions()).toEqual(expectedActions);
  });
});
