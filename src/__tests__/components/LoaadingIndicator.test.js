/* globals it */

import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LoadingIndicator from '../../components/LoadingIndicator';

configure({ adapter: new Adapter() }); // configures Enzyme adapter

chai.use(chaiEnzyme());

configure({ adapter: new Adapter() });

const loadingComponent = (
  <LoadingIndicator />
);

it('App renders without crashing', () => {
  const wrapper = shallow(loadingComponent);

  expect(wrapper.exists()).to.equal(true);
});

it('should render and contain the title and the indicator', () => {
  const wrapper = shallow(loadingComponent);
  const title = wrapper.find('.loading-indicator__title');
  const indicator = wrapper.find('.loading-indicator__ellipsis');

  expect(title.length)
    .to.equal(1);

  expect(indicator.length)
    .to.equal(1);
});

it('should have four divs in the ellipsis', () => {
  const wrapper = shallow(loadingComponent);
  const indicator = wrapper.find('.loading-indicator__ellipsis');
  const divs = indicator.find('.loading-indicator__dot');

  expect(divs.length)
    .to.equal(4);
});
