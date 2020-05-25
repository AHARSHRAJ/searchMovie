const OMDB_API_KEY = 'f9a3c12';

export const filmDetail = (film, callback) => {
  const imdbID = film.imdbID;
  var filmDetails;
  const queryString = 'http://www.omdbapi.com/?apikey=' + OMDB_API_KEY + '&i=' + imdbID
  fetch(queryString)
    .then(res => res.json())
    .then(
      (result) => {
        filmDetails = {
          isLoaded: true,
          filmDetails: result
        }
        callback(filmDetails);
      },
      (error) => {
        filmDetails = {
          isLoaded: true,
          error: true
        }
        callback(filmDetails);
      }
    )
}

export const searchFilmsByTitle = (text, textYear, callback_success, callback_fail) => {
  let queryString
  if (textYear) {
    queryString = 'http://www.omdbapi.com/?apikey=' + OMDB_API_KEY + '&s=' + text + '&y' + textYear;
  } else {
    queryString = 'http://www.omdbapi.com/?apikey=' + OMDB_API_KEY + '&s=' + text;
  }

  fetch(queryString)
    .then(res => res.json())
    .then(
      (result) => {
        if (result.Response === 'False') return;
        callback_success(result);
      },
      (error) => {
        callback_fail([]);
      }
    )
}
