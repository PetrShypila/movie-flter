import React from 'react';

const Filter = ({updateFilter}) => {
  const extractValue = (event) => updateFilter(event.target.value);

  return (<div className={"form-group"} style={{margin: "100px 100px 30px 100px"}}>
    <input
      size={"40"}
      onChange={extractValue}
      className={"form-control"}
      placeholder={"Filter movies by country writer or genre"}/>
  </div>);
};

export default Filter;
