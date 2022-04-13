import React from "react";
import { connect } from "react-redux";
import { getMovieDetail } from "../../actions/index";

import "./Movie.css";

class Movie extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getMovieDetail(id);
  }

  render() {
    return (
      <div className="movie-detail">
        <h2>{`Titulo: ${this.props.movies.Title}`}</h2>
        <img src={this.props.movies.Poster} alt="Img" />
        <h4>{`Genero: ${this.props.movies.Genre}`}</h4>
        <h4>{`Año: ${this.props.movies.Year}`}</h4>
        <h4>{`Duracion: ${this.props.movies.Runtime}`}</h4>
        <h4>{`Elenco: ${this.props.movies.Actors}`}</h4>
        <h4>{`Lanzamiento: ${this.props.movies.Released}`}</h4>
        <h4>{`Pais: ${this.props.movies.Country}`}</h4>
        <h4>{`Clasificacion: ${this.props.movies.Rated}`}</h4>
        <h4>{`Premios: ${this.props.movies.Awards}`}</h4>
        <h4>{`Tipo: ${this.props.movies.Type}`}</h4>
        <h4>{`Raiting IMDB: ${this.props.movies.imdbRating}`}</h4>
      </div>
    );
  }
}

export default connect((state) => ({ movies: state.movieDetail }), {
  getMovieDetail,
})(Movie);
