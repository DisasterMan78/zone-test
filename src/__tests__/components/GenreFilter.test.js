/* globals it */

import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GenreFilter from '../../components/GenreFilter';


configure({ adapter: new Adapter() }); // configures Enzyme adapter

chai.use(chaiEnzyme());

configure({ adapter: new Adapter() });

const genreNames = {
  0: 'Terrible',
  1: 'Eighties',
  2: 'Teen',
  3: 'Movies',
};

const genreFilterComponent = (
  <GenreFilter
    genreNames={genreNames}
    activeGenres={[]}
    setActiveGenres={() => {}}
    genresLoading={false}
  />
);

it('App renders without crashing', () => {
  const wrapper = shallow(genreFilterComponent);

  expect(wrapper.exists()).to.equal(true);
});

it('should render and contain one genre label for every genreNames item', () => {
  const wrapper = mount(genreFilterComponent);
  const labels = wrapper.find('Label');

  expect(labels.length)
    .to.equal(Object.keys(genreNames).length);
});
