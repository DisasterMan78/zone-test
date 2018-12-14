import React from 'react';
import PropTypes from 'prop-types';
import LabelledCheckbox from './LabelledCheckbox';
import LoadingIndicator from './LoadingIndicator';


const invokeSetActiveGenres = (event, setActiveGenres) => {
  setActiveGenres(parseInt(event.target.value, 10), event.target.checked);
};

/* eslint-disable react/forbid-prop-types */
const GenreFilter = ({
  genreNames, activeGenres, setActiveGenres, genresLoading,
}) => {
  let loadingIndicator =  '';
  const genreComponents = [];

  if (genresLoading) {
    loadingIndicator = (
      <LoadingIndicator />
    );
  } else
  if (genreNames) {
    Object.keys(genreNames).forEach((key) => {
      const genre = genreNames[key];

      genreComponents.push(
        <LabelledCheckbox
          key={key}
          value={key}
          genre={genre}
          activeGenres={activeGenres}
          name="genre-filter__genre"
          setActiveGenres={setActiveGenres}
          onChange={invokeSetActiveGenres}
        />
      );
    });
  }

  return (
    <fieldset className="genre-filter">
      <h2>What do you want to see?</h2>
      {loadingIndicator}
      {genreComponents}
    </fieldset>
  );
};
/* eslint-disable react/forbid-prop-types */


GenreFilter.propTypes = {
  genreNames: PropTypes.object.isRequired,
  activeGenres: PropTypes.array.isRequired,
  setActiveGenres: PropTypes.func.isRequired,
  genresLoading: PropTypes.bool.isRequired,
};

export default GenreFilter;
