/* globals it */

import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { NowPlaying } from '../../containers/NowPlaying';

configure({ adapter: new Adapter() }); // configures Enzyme adapter

chai.use(chaiEnzyme());

configure({ adapter: new Adapter() });

const movies = [
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
];

const ratingMinimum = 5;
const activeGenres = [10751, 878];

const moviesComponent = (
  <NowPlaying
    movies={movies}
    ratingMinimum={ratingMinimum}
    genreNames={{}}
    loading={false}
    activeGenres={activeGenres}
  />
);

it('App renders without crashing', () => {
  const wrapper = shallow(moviesComponent);

  expect(wrapper.exists()).to.equal(true);
});

it('should render and contain as many movies are passed to it', () => {
  const wrapper = shallow(moviesComponent);
  const movieEls = wrapper.find('Movie');

  expect(movieEls.length)
    .to.equal(2);
});

it('should filter movies with low ratings', () => {
  const wrapper = mount(moviesComponent);
  wrapper.setProps({ ratingMinimum: 7 });

  const movieEls = wrapper.find('Movie');

  expect(movieEls.length)
    .to.equal(1);

  expect(movieEls.props().movieId)
    .to.equal(338952);
});

it('should filter inactive genres', () => {
  const wrapper = mount(moviesComponent);
  wrapper.setProps({ activeGenres: [878] });

  const movieEls = wrapper.find('Movie');

  expect(movieEls.length)
    .to.equal(1);

  expect(movieEls.props().movieId)
    .to.equal(335983);
});
