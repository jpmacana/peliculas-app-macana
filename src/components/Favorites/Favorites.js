import React, { Component } from "react";
import { connect } from "react-redux";
//import { Link } from "react-router-dom";
import "./Favorites.css";
import { removeMovieFavorite } from "../../actions";

export class ConnectedList extends Component {
  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {this.props.favs.map((movie) => (
            <li key={movie.imdbID}>
              <span> Title: {movie.Title} </span>
              <span> Year: {movie.Year} </span>
              <span> Type: {movie.Type} </span>
              <button
                onClick={() => this.props.removeMovieFavorite(movie.imdbID)}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect((state) => ({ favs: state.moviesFavourites }), {
  removeMovieFavorite,
})(ConnectedList);
