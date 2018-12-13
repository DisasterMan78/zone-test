import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Button } from 'semantic-ui-react';

import { fetchMovies, fetchGenres, setMinimumRating } from '../actions';
import RatingFilter from '../components/RatingFilter';

export class Header extends Component {
  static propTypes = {
    ratingMinimum: PropTypes.number.isRequired,
    genreNames: PropTypes.object,
    loading: PropTypes.bool,
    fetchMovies: PropTypes.func.isRequired,
    fetchGenres: PropTypes.func.isRequired,
    setMinimumRating: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.props.fetchGenres();
  };


  render() {
    const { fetchMovies, ratingMinimum, setMinimumRating } = this.props;

    return (
      <header>
        <Button
          className="whatson__button"
          content="What's on?"
          onClick={fetchMovies}
        />
        <RatingFilter
          ratingMinimum={ratingMinimum}
          setMinimumRating={setMinimumRating}
        />
      </header>
    )
  }
};

const mapStateToProps = state => ({
  ratingMinimum: state.ratingMinimum,
  genreNames: state.genreNames,
  loading: state.loading,
});

const mapDispatchToProps = {
  fetchMovies,
  fetchGenres,
  setMinimumRating
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
