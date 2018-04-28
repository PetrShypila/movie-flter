import React from 'react';

const MovieTitle = ({title, onClick}) => {
  return (<div
    onClick={onClick}
    style={{cursor: "pointer"}}
  >
    {title}
  </div>);
};

export default MovieTitle;
