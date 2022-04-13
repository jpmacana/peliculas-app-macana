export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIE_DETAIL = 'GET_MOVIE_DETAIL';
export const ADD_MOVIE_FAVORITE = 'ADD_MOVIE_FAVORITE';
export const REMOVE_MOVIE_FAVORITE = 'REMOVE_MOVIE_FAVORITE';

const API_KEY ="47fff5cc";

export function getMovies (titulo) {
    return function(dispatch) {
        return fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${titulo}`)
          .then(response => response.json())
          .then(json => {
            dispatch({ type: "GET_MOVIES", payload: json });
          });
      };
}
export function addMovieFavorite () {}
export function getMovieDetail () {}
export function removeMovieFavorite () {}

