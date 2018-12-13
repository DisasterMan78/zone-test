import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'semantic-ui-react';


// Disable rule to use input+label hack without eslint error
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable react/forbid-prop-types */
const LabelledCheckbox = ({
  name, value, genre, activeGenres, onChange, setActiveGenres,
}) => (
  <div
    className={name}
  >
    <input
      type="checkbox"
      // ref={checkbox}
      id={`${name}-checkbox--${value}`}
      name={name}
      value={value}
      defaultChecked={activeGenres.includes(parseInt(value, 10))}
      onChange={(event) => { onChange(event, setActiveGenres); }}
    />
    <label
      htmlFor={`${name}-checkbox--${value}`}
    >
      <Label
        tag
        className={`${name}-label`}
      >
        {genre}
      </Label>
    </label>
  </div>
);
/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/label-has-for */


LabelledCheckbox.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  activeGenres: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  setActiveGenres: PropTypes.func.isRequired,
};

export default LabelledCheckbox;
