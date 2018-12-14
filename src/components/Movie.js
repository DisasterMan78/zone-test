import React from 'react';
import PropTypes from 'prop-types';

import {
  Card, Image, Rating, Label,
} from 'semantic-ui-react';

/* eslint-disable react/forbid-prop-types */
const Movie = ({
  movieId, title, imagePath, genres, rating, genreNames, activeGenres,
}) => {
  let genreComponents = '';

  if (genres) {
    genreComponents = genres.map(item => (
      <Label
        tag
        key={item}
        className={`movie__tag${(activeGenres.includes(item)) ? ' active' : ''}`}
      >
        {genreNames[item]}
      </Label>
    ));
  }

  return (
    <Card
      className="movie"
      id={`movie--${movieId}`}
    >
      <Image
        className="movie__poster"
        src={`https://image.tmdb.org/t/p/w500/${imagePath}`}
        alt={`${title} poster`}
      />
      <Card.Content>
        <Card.Header className="movie__title text-center">
          {title}
        </Card.Header>
        <Card.Meta>
          {genreComponents}
        </Card.Meta>
      </Card.Content>
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
};
/* eslint-disable react/forbid-prop-types */


Movie.propTypes = {
  movieId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  rating: PropTypes.number.isRequired,
  genreNames: PropTypes.object.isRequired,
  activeGenres: PropTypes.array.isRequired,
};

export default Movie;
