/* globals it */

import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Header } from '../../containers/Header';
import { fetchGenres } from '../../actions/index';

configure({ adapter: new Adapter() }); // configures Enzyme adapter

chai.use(chaiEnzyme());

configure({ adapter: new Adapter() });

const headerComponent = (
  <Header
    action={() => {}}
    fetchGenres={() => {}}
  />
);

it('Header renders without crashing', () => {
  const wrapper = shallow(headerComponent);

  expect(wrapper.exists()).to.equal(true);
});

it('should render and contain a button', () => {
  const wrapper = shallow(headerComponent);

  expect(wrapper)
    .to.have.exactly(1).descendants('Button');
});
