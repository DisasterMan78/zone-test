/* globals it */

import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Header } from '../../containers/Header';

configure({ adapter: new Adapter() }); // configures Enzyme adapter

chai.use(chaiEnzyme());

configure({ adapter: new Adapter() });

const headerComponent = (
  <Header
    ratingMinimum={0}
    genreNames={{}}
    loading={false}
    fetchMovies={() => {}}
    fetchGenres={() => {}}
    setMinimumRating={() => {}}
  />
);

it('Header renders without crashing', () => {
  const wrapper = shallow(headerComponent);

  expect(wrapper.exists()).to.equal(true);
});

it('should render and contain a button and a rating filter', () => {
  const wrapper = shallow(headerComponent);

  expect(wrapper)
    .to.have.exactly(1).descendants('Button');

  expect(wrapper)
    .to.have.exactly(1).descendants('RatingFilter');
});
