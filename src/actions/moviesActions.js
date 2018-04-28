import movies from './movies';

export function getMovies(filter) {
  const loweredFilter = filter.toLowerCase();

  return movies.Movies.filter((m) => {
    return m.Country.toLowerCase().indexOf(loweredFilter) !== -1
      || m.Writer.toLowerCase().indexOf(loweredFilter) !== -1
      || m.Genre.toLowerCase().indexOf(loweredFilter) !== -1
  })
}
