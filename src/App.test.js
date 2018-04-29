import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {hello: 1};

  return shallow(<App {...props} />)
}

it('renders the app', () => {
  const wrapper = setup();
  expect(wrapper.find('header').length).to.equal(1);
  expect(wrapper.find('Filter').length).to.equal(1);
  expect(wrapper.find('MovieList').length).to.equal(1);
});