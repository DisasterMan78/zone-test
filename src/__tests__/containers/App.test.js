/* globals it */

import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../../containers/App';

configure({ adapter: new Adapter() }); // configures Enzyme adapter

chai.use(chaiEnzyme());

configure({ adapter: new Adapter() });

const appComponent = (
  <App
    action={() => {}}
  />
);

it('App renders without crashing', () => {
  const wrapper = shallow(appComponent);

  expect(wrapper.exists()).to.equal(true);
});

it('should render and contain Header and NowPlaying components', () => {
  const wrapper = shallow(appComponent);

  expect(wrapper)
    .to.have.exactly(1).descendants('Connect(Header)');

  expect(wrapper)
    .to.have.exactly(1).descendants('Connect(NowPlaying)');
});
