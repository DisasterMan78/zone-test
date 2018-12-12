import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Movie from '../components/Movie';

/* eslint-disable react/forbid-prop-types */
export const NowPlaying = ({ movies, loading }) => {
  let movie = '';

  if (movies) {
    movie = movies.map(item => (
      <Movie
        key={item.id}
        movieId={item.id}
        title={item.title}
        imagePath={item.poster_path}
        rating={item.vote_average}
        genres={item.genre_ids}
        popularity={item.popularity}
      />
    ));
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
  loading: PropTypes.bool,
};

NowPlaying.defaultProps = {
  movies: [],
  loading: false,
};

const mapStateToProps = state => ({
  movies: state.movies,
  loading: state.loading,
});

export default connect(
  mapStateToProps,
  null,
)(NowPlaying);