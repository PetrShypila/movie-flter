import React from 'react';
import { expect } from "chai";
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';

import MovieList from './MovieList';
import { Movies } from '../actions/movies';

Enzyme.configure({ adapter: new Adapter() });

function setup(filterValue) {
  return shallow(<MovieList filterValue={filterValue} />)
}

it('renders all filtered movies', () => {
  const filterWord = 'usa';

  const filteredMovies = Movies.filter((m) => {
    return m.Country.toLowerCase().indexOf(filterWord) !== -1
      || m.Writer.toLowerCase().indexOf(filterWord) !== -1
      || m.Genre.toLowerCase().indexOf(filterWord) !== -1
  });

  const wrapper = setup(filterWord);

  expect(wrapper.find('Movie').length).to.equal(filteredMovies.length);
  expect(wrapper.find('MovieDetails').length).to.equal(0);
});
