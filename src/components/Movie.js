import React from 'react';
import PropTypes from 'prop-types';

const Movie = ({ title, imagePath }) => (
  <article>
    <h3 className="movie__title text-center">{title}</h3>
    <img
      className="movie__poster"
      src={`https://image.tmdb.org/t/p/w500/${imagePath}`}
      alt="{title} poster"
    />
  </article>
);

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
};

export default Movie;
