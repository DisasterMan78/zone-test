import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Button } from 'semantic-ui-react';

import {
  fetchMovies, fetchGenres, setMinimumRating, setActiveGenres,
} from '../actions';
import RatingFilter from '../components/RatingFilter';
import GenreFilter from '../components/GenreFilter';

/* eslint-disable react/forbid-prop-types */
export class Header extends Component {
  componentWillMount() {
    const { fetchGenresProp } = this.props;
    fetchGenresProp();
  }


  render() {
    const {
      fetchMoviesProp,
      ratingMinimum,
      setMinimumRatingProp,
      genreNames,
      activeGenres,
      setActiveGenresProp,
      genresLoading,
    } = this.props;

    return (
      <header>
        <Button
          className="whatson__button"
          content="What's on?"
          onClick={fetchMoviesProp}
        />
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
