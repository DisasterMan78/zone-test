import React from 'react';
import PropTypes from 'prop-types';

import { Card, Image } from 'semantic-ui-react';

const Movie = ({ title, imagePath }) => (
  <Card>
    <Image
      className="movie__poster"
      src={`https://image.tmdb.org/t/p/w500/${imagePath}`}
      alt={`${title} poster`}
    />
    <Card.Header className="movie__title text-center">{title}</Card.Header>
  </Card>
);

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
};

export default Movie;
