/* globals it */

import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Movie from '../../components/Movie';

configure({ adapter: new Adapter() }); // configures Enzyme adapter

chai.use(chaiEnzyme());

configure({ adapter: new Adapter() });

it('App renders without crashing', () => {
  const wrapper = shallow(<Movie
    title="Sample Movie"
    imagePath="sample-image.jpeg"
    rating={5}
  />);

  expect(wrapper.exists()).to.equal(true);
});

it('should render and contain the title, a poster and a rating', () => {
  const wrapper = shallow(<Movie
    title="Sample Movie"
    imagePath="sample-image.jpeg"
    rating={5}
  />);
  const title = wrapper.find('.movie__title');
  const poster = wrapper.find('.movie__poster');
  const rating = wrapper.find('.movie__rating');

  expect(title.length)
    .to.equal(1);

  expect(poster.length)
    .to.equal(1);

  expect(rating.length)
    .to.equal(1);
});
