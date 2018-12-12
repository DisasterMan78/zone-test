/* globals it */

import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { App } from '../../containers/App';

configure({ adapter: new Adapter() }); // configures Enzyme adapter

chai.use(chaiEnzyme());

configure({ adapter: new Adapter() });

it('App renders without crashing', () => {
  const wrapper = shallow(
    <App
      action={() => {}}
    />
  );

  expect(wrapper.exists()).to.equal(true);
});

it('should render and contain a button and nowPlaying components', () => {
  const wrapper = shallow(
    <App
      action={() => {}}
    />
  );

  expect(wrapper)
    .to.have.exactly(1).descendants('Button');

  expect(wrapper)
    .to.have.exactly(1).descendants('Connect(NowPlaying)');
});
