import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Button } from 'semantic-ui-react';

import { fetchMovies } from '../actions';

export const Header = ({ action }) => (
  <header>
    <Button
      className="whatson__button"
      content="What's on?"
      onClick={action}
    />
  </header>
);

Header.propTypes = {
  action: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  action: fetchMovies,
};

export default connect(null, mapDispatchToProps)(Header);
