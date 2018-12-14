import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  fetchMovies, fetchGenres, setMinimumRating, setActiveGenres,
} from '../actions';
import RatingFilter from '../components/RatingFilter';
import GenreFilter from '../components/GenreFilter';

/* eslint-disable react/forbid-prop-types */
export class Header extends Component {
  componentWillMount() {
    const { fetchMoviesProp, fetchGenresProp } = this.props;
    fetchGenresProp();
    fetchMoviesProp();
  }


  render() {
    const {
      ratingMinimum,
      setMinimumRatingProp,
      genreNames,
      activeGenres,
      setActiveGenresProp,
      genresLoading,
    } = this.props;

    return (
      <header>
        <h1>Let's Go To The Movies!</h1>
        <RatingFilter
          ratingMinimum={ratingMinimum}
          setMinimumRating={setMinimumRatingProp}
        />
        <GenreFilter
          genreNames={genreNames}
          activeGenres={activeGenres}
          setActiveGenres={setActiveGenresProp}
          genresLoading={genresLoading}
        />
      </header>
    );
  }
}
/* eslint-disable react/forbid-prop-types */

Header.propTypes = {
  ratingMinimum: PropTypes.number.isRequired,
  genreNames: PropTypes.object.isRequired,
  genresLoading: PropTypes.bool.isRequired,
  fetchMoviesProp: PropTypes.func.isRequired,
  fetchGenresProp: PropTypes.func.isRequired,
  setMinimumRatingProp: PropTypes.func.isRequired,
  activeGenres: PropTypes.array.isRequired,
  setActiveGenresProp: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  ratingMinimum: state.ratingMinimum,
  genreNames: state.genreNames,
  genresLoading: state.genresLoading,
  activeGenres: state.activeGenres,
});

const mapDispatchToProps = {
  fetchMoviesProp: fetchMovies,
  fetchGenresProp: fetchGenres,
  setMinimumRatingProp: setMinimumRating,
  setActiveGenresProp: setActiveGenres,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
