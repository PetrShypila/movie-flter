import React from 'react';
import { expect } from "chai";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Movie from './Movie';
import { Movies } from '../actions/movies';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  return shallow(<Movie movie={Movies[0]} />)
}

it('renders movie with and without details', () => {
  const wrapper = setup();
  expect(wrapper.find('MovieTitle').length).to.equal(1);
  expect(wrapper.find('MovieDetails').length).to.equal(0);
});

it('toggles movie details', () => {
  const wrapper = setup();

  wrapper.find('MovieTitle').simulate('click');

  expect(wrapper.find('MovieTitle').length).to.equal(1);
  expect(wrapper.find('MovieDetails').length).to.equal(1);

  wrapper.find('MovieTitle').simulate('click');

  expect(wrapper.find('MovieTitle').length).to.equal(1);
  expect(wrapper.find('MovieDetails').length).to.equal(0);
});