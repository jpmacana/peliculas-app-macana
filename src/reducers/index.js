import { GET_MOVIES,GET_MOVIE_DETAIL,ADD_MOVIE_FAVORITE,REMOVE_MOVIE_FAVORITE } from "../actions";

const initialState = {
  moviesFavourites: [],
  moviesLoaded: [],
  movieDetail: {},
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_MOVIES:
      return { ...state,moviesLoaded: payload.Search };
    case GET_MOVIE_DETAIL:
      return { ...state };
    case ADD_MOVIE_FAVORITE:
      return { ...state };
    case REMOVE_MOVIE_FAVORITE:
      return { ...state };

    default:
      return state;
  }
}
