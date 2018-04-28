import React from 'react';

import MovieTitle from './MovieTitle';
import MovieDetails from './MovieDetails';

export default class Movie extends React.Component {

  constructor(props){
    super(props);

    this.state = {
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

    return (<div>
      <MovieTitle title={movie.Title} onClick={this.toggleDetails} />
      {this.state.showDetails && <MovieDetails movie={movie} />}
    </div>);
  }
};

