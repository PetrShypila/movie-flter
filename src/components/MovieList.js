import React from 'react';

import Movie from './Movie';
import * as moviesActions from '../actions/moviesActions';

const MovieList = ({filterValue}) => {
  const filteredMovies = moviesActions.getMovies(filterValue);

  return <div>{
    filteredMovies.map((m) => <Movie key={m.imdbID} movie={m} />)
  }</div>;
};

export default MovieList;
