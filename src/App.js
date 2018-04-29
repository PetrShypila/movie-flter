import React, { Component } from 'react';

import './App.css';
import Filter from './components/Filter';
import MovieList from './components/MovieList';

// The entry point of the whole application
class App extends Component {
  constructor() {
    super();

    this.state = {
      filterValue: '',
    }
  }

  updateFilterValue = (filterValue) => {
    this.setState({filterValue});
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Movie Filter App</h1>
          <h2 className="App-title">Filter movies by <b>Country</b>, <b>Writer</b> and <b>Genre</b></h2>
        </header>
        <Filter updateFilter={this.updateFilterValue}/>

        <MovieList filterValue={this.state.filterValue} />
      </div>
    );
  }
}

export default App;
