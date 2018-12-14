import React from 'react';
import PropTypes from 'prop-types';

import { Rating } from 'semantic-ui-react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

export const calculateMaskWidth = ratingMinimum => (200 - (ratingMinimum * 20));

let timerState = 0;
let timer = 0;
const intentDelay = 20;

// Intent function to reduce ridiculous number of reducer calls
// when fiddling with rating input
const intent = (value, callback) => {
  if (timerState === 1) {
    clearTimeout(timer);
  }

  timerState = 1;

  timer = setTimeout(() => {
    timerState = 0;
    callback(value);
  }, intentDelay);
};

const RatingFilter = ({ ratingMinimum, setMinimumRating }) => {
  const maskStyle = {
    width: `${calculateMaskWidth(ratingMinimum)}px`,
  };

  return (
    <div className="rating-filter">
      <h2>Junk filter:</h2>
      <InputRange
        className="rating-filter__input"
        maxValue={10}
        minValue={0}
        step={0.5}
        value={ratingMinimum}
        formatLabel={() => ''}
        onChange={value => intent({ value }, setMinimumRating)}
      />
      <div className="rating-filter__display">
        <Rating
          className="rating-filter__display-rating rating-filter__display-rating--ten"
          icon="star"
          size="large"
          defaultRating={10}
          maxRating={10}
          disabled
        />
        <div
          className="rating-filter__display-mask"
          style={maskStyle}
        />
      </div>
    </div>
  );
};


RatingFilter.propTypes = {
  ratingMinimum: PropTypes.number.isRequired,
  setMinimumRating: PropTypes.func.isRequired,
};

export default RatingFilter;
