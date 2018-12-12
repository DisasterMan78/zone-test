import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Button } from 'semantic-ui-react';

import { fetchMovies } from '../actions';

import NowPlayingConnected from './NowPlaying';


export const App = ({ action }) => (
  <div>
    <Button
      className="whatson__button"
      content="What's on?"
      onClick={action}
    />
    <NowPlayingConnected />
  </div>
);

App.propTypes = {
  action: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  action: fetchMovies,
};

export default connect(null, mapDispatchToProps)(App);
