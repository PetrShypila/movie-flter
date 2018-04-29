import React from 'react';

// Component for showing info about
const MovieDetails = ({movie}) => {
  return (
    <div>
      <div><b>Country:</b>{` ${movie.Country}`}</div>
      <div><b>Writer:</b>{` ${movie.Writer}`}</div>
      <div><b>Genre:</b>{` ${movie.Genre}`}</div>
      <div><b>Year:</b>{` ${movie.Year}`}</div>
      <div><b>Released:</b>{` ${movie.Released}`}</div>
    </div>
  );
};

export default MovieDetails;
