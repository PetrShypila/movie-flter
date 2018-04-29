import React from 'react';

import Movie from './Movie';
import * as moviesActions from '../actions/moviesActions';

// Container component for showing list of movies.
const MovieList = ({filterValue}) => {
  const filteredMovies = moviesActions.getMovies(filterValue);

  return (
    <div>
      <ul className="list-group">{
        filteredMovies.map((m) => <li className="list-group-item" style={style}><Movie key={m.imdbID} movie={m} /></li>)
      }</ul>
    </div>
  );
};

const style = {
  marginLeft: "10%",
  marginRight: "10%"
};

export default MovieList;
