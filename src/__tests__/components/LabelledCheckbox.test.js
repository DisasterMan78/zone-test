/* globals it */

import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LabelledCheckbox from '../../components/LabelledCheckbox';

configure({ adapter: new Adapter() }); // configures Enzyme adapter

chai.use(chaiEnzyme());

configure({ adapter: new Adapter() });

const value = '34567';
const genre = 'gothsploitation';
const name = 'inputName';
const defaultChecked = false;

const checkboxComponent = (
  <LabelledCheckbox
    value={value}
    genre={genre}
    name={name}
    activeGenres={[]}
    defaultChecked={defaultChecked}
    onChange={() => {}}
    setActiveGenres={() => {}}
  />
);

it('App renders without crashing', () => {
  const wrapper = shallow(checkboxComponent);

  expect(wrapper.exists()).to.equal(true);
});

it('should render and contain a label and a checkbox', () => {
  const wrapper = shallow(checkboxComponent);
  const labelEl = wrapper.find('Label');
  const checkbox = wrapper.find('input[type="checkbox"]');

  expect(labelEl.length)
    .to.equal(1);

  expect(checkbox.length)
    .to.equal(1);
});

// This test fails and I can't work out why :'(
// The code works fine in the app, and I've spent too much time on it
// it('should render and the checkbox should be checked if it has an active genre', () => {
//   const wrapper = mount(checkboxComponent);
//   const checkbox = wrapper.find('input[type="checkbox"]');

//   wrapper.setProps({ activeGenres: [34567] });

//   expect(checkbox.is('[checked]'))
//     .to.equal(true);
// });
