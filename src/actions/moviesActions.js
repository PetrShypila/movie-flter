import { Movies } from './movies';

export function getMovies(filter) {
  const loweredFilter = filter.toLowerCase();
  // Here we store logic of receiving a list of movies, sorting and filtering them.
  // In real world scenario it could be replaced with REST calls.
  return Movies.sort((a, b) => {
    if (a.Title > b.Title) {
      return 1;
    }
    if (a.Title < b.Title) {
      return -1;
    }
    return 0;
  }).filter((m) => {
    return m.Country.toLowerCase().indexOf(loweredFilter) !== -1
      || m.Writer.toLowerCase().indexOf(loweredFilter) !== -1
      || m.Genre.toLowerCase().indexOf(loweredFilter) !== -1
  })
}
