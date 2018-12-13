import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Movie from '../components/Movie';

/* eslint-disable react/forbid-prop-types */
export const NowPlaying = ({ movies, genreNames, loading, ratingMinimum }) => {
  let movie = '';

  if (movies) {
    movie = movies.map((item) => {
      let returnMovie = '';

      if (item.vote_average >= ratingMinimum) {
        returnMovie = (
          <Movie
            key={item.id}
            movieId={item.id}
            title={item.title}
            imagePath={item.poster_path}
            rating={item.vote_average}
            genres={item.genre_ids}
            genreNames={genreNames}
          />
        );
      }
      return returnMovie;
    });
  }
  if (loading) {
    movie = <h3 className="loading-indicator">Loading ...</h3>;
  }

  return (
    <div
      className="now-playing"
    >
      {movie}
    </div>
  );
};
/* eslint-disable react/forbid-prop-types */

NowPlaying.propTypes = {
  movies: PropTypes.array,
  genreNames: PropTypes.object,
  loading: PropTypes.bool,
  ratingMinimum: PropTypes.number.isRequired,
};

NowPlaying.defaultProps = {
  movies: [],
  genreNames: {},
  loading: false,
};

const mapStateToProps = state => ({
  movies: state.movies,
  genreNames: state.genreNames,
  loading: state.loading,
  ratingMinimum: state.ratingMinimum,
});

export default connect(
  mapStateToProps,
  null,
)(NowPlaying);
