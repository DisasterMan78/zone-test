import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Movie from '../components/Movie';


const movieHasActiveGenre = (genres, activeGenres) => genres.some(
  genre => activeGenres.includes(genre)
);

/* eslint-disable react/forbid-prop-types */
export const NowPlaying = ({
  movies, genreNames, loading, ratingMinimum, activeGenres,
}) => {
  let movie = '';

  if (movies) {
    movie = movies.map((item) => {
      let returnMovie = '';

      if (
        item.vote_average >= ratingMinimum && movieHasActiveGenre(item.genre_ids, activeGenres)
      ) {
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
  genreNames: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  ratingMinimum: PropTypes.number.isRequired,
  activeGenres: PropTypes.array.isRequired,
};

NowPlaying.defaultProps = {
  movies: [],
};

const mapStateToProps = state => ({
  movies: state.movies,
  genreNames: state.genreNames,
  loading: state.loading,
  ratingMinimum: state.ratingMinimum,
  activeGenres: state.activeGenres,
});

export default connect(
  mapStateToProps,
  null,
)(NowPlaying);
