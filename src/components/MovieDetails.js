import React from 'react';

const MovieDetails = ({movie}) => {
  return (<div>
    <div><b>Country:</b>{` ${movie.Country}`}</div>
    <div><b>Writer:</b>{` ${movie.Writer}`}</div>
    <div><b>Genre:</b>{` ${movie.Genre}`}</div>
  </div>);
};

export default MovieDetails;
