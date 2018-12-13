/* globals it */

import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RatingFilter, { calculateMaskWidth } from '../../components/RatingFilter';

configure({ adapter: new Adapter() }); // configures Enzyme adapter

chai.use(chaiEnzyme());

configure({ adapter: new Adapter() });

const ratingComponent = (
  <RatingFilter
    ratingMinimum={5}
    setMinimumRating={() => {}}
  />
);

it('App renders without crashing', () => {
  const wrapper = shallow(ratingComponent);

  expect(wrapper.exists()).to.equal(true);
});

it('should render and contain the range input and a rating display', () => {
  const wrapper = shallow(ratingComponent);
  const filterEl = wrapper.find('InputRange');
  const ratingDisplayEl = wrapper.find('.rating-filter__display');

  expect(filterEl.length)
    .to.equal(1);

  expect(ratingDisplayEl.length)
    .to.equal(1);
});

it('should contain a rating display which contains the Rating component and a mask ', () => {
  const wrapper = shallow(ratingComponent);
  const ratingDisplayEl = wrapper.find('.rating-filter__display');
  const ratingUiComponent = ratingDisplayEl.find('Rating');
  const mask = ratingDisplayEl.find('.rating-filter__display-mask');

  expect(ratingUiComponent.length)
    .to.equal(1);

  expect(mask.length)
    .to.equal(1);
});

it('should display the correct rating', () => {
  const wrapper = mount(ratingComponent);
  const mask = wrapper.find('.rating-filter__display-mask');

  expect(mask.props().style.width)
    .to.equal(`${calculateMaskWidth(wrapper.props().ratingMinimum)}px`);
});
