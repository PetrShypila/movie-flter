import React from 'react';

// Stateless component which represents filter field.
// It receives user's input and pass it back to parent via `updateFilter` function.
const Filter = ({updateFilter}) => {
  const extractValue = (event) => updateFilter(event.target.value);

  return (
    <div className={"form-group"} style={style}>
      <input
        size={"40"}
        onChange={extractValue}
        className={"form-control"}
        placeholder={"Filter movies by country writer or genre"}/>
    </div>
  );
};

const style = {
  margin: "10% 10% 30px 10%"
};

export default Filter;
