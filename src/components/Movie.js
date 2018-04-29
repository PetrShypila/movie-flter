import React from 'react';

import MovieTitle from './MovieTitle';
import MovieDetails from './MovieDetails';

// Container component which stores movie's data
// and has it's own state whether user pressed a button to see the details.
export default class Movie extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      // Prop responsible for storing info about whether component should show the details or not
      showDetails: false,
    }
  }

  toggleDetails = () => {
    this.setState((prevState) => {
      return {showDetails: !prevState.showDetails}
    });
  };

  render () {
    const {movie} = this.props;
    // Below we show only movie title by default plus
    // movie details if user clicked on movie title
    return (
      <div>
        <MovieTitle title={movie.Title} onClick={this.toggleDetails} />
        {this.state.showDetails && <MovieDetails movie={movie} />}
      </div>
    );
  }
};

