/* globals it */

import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Movie from '../../components/Movie';

configure({ adapter: new Adapter() }); // configures Enzyme adapter

chai.use(chaiEnzyme());

configure({ adapter: new Adapter() });

const movieId = 34567;
const title = 'Sample Movie';
const imagePath = 'sample-image.jpeg';
const rating = 5;
const genres = [0, 1, 2, 3];
const genreNames = {
  0: 'Terrible',
  1: 'Eighties',
  2: 'Teen',
  3: 'Movies',
};
const activeGenres = [];

const movieComponent = (
  <Movie
    movieId={movieId}
    title={title}
    imagePath={imagePath}
    rating={rating}
    genres={genres}
    genreNames={genreNames}
    activeGenres={activeGenres}
  />
);

it('App renders without crashing', () => {
  const wrapper = shallow(movieComponent);

  expect(wrapper.exists()).to.equal(true);
});

it('should render and contain the title, a poster and a rating', () => {
  const wrapper = shallow(movieComponent);
  const titleEl = wrapper.find('.movie__title');
  const poster = wrapper.find('.movie__poster');
  const ratingEl = wrapper.find('.movie__rating');

  expect(titleEl.length)
    .to.equal(1);

  expect(poster.length)
    .to.equal(1);

  expect(ratingEl.length)
    .to.equal(1);
});

it('should display the correct rating', () => {
  const wrapper = mount(movieComponent);
  const genreTags = wrapper.find('.movie__rating .active');

  expect(genreTags.length)
    .to.equal(rating);
});

it('should contain a tag for every genre', () => {
  const wrapper = shallow(movieComponent);
  const genreTags = wrapper.find('.movie__tag');

  expect(genreTags.length)
    .to.equal(genres.length);
});

it('should display tag ids to genre names', () => {
  const wrapper = mount(movieComponent);
  const genreTag = wrapper.find('.movie__tag').at(0);

  expect(genreTag).text()
    .to.equal(genreNames[0]);
});
