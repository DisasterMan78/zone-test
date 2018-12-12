import React from 'react';
import PropTypes from 'prop-types';

import { Card, Image, Rating } from 'semantic-ui-react';

const Movie = ({ title, imagePath, rating, popularity }) => (
  <Card>
    <Image
      className="movie__poster"
      src={`https://image.tmdb.org/t/p/w500/${imagePath}`}
      alt={`${title} poster`}
    />
    <Card.Header className="movie__title text-center">
      {title} {popularity}
    </Card.Header>
    <Card.Content extra>
      <Rating
        className="movie__rating"
        icon="star"
        defaultRating={rating}
        maxRating={10}
        disabled
      />
    </Card.Content>
  </Card>
);

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  // popularity: PropTypes.string.isRequired,
};

export default Movie;
