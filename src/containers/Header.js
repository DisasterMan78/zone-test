import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Button } from 'semantic-ui-react';

import { fetchMovies, fetchGenres } from '../actions';

export class Header extends Component {
  static propTypes = {
      action: PropTypes.func.isRequired,
      fetchGenres: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.props.fetchGenres();
  };


  render() {
    const { action } = this.props;

    return (
      <header>
        <Button
          className="whatson__button"
          content="What's on?"
          onClick={action}
        />
      </header>
    )
  }
};

Header.propTypes = {
  action: PropTypes.func.isRequired,
  fetchGenres: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  action: fetchMovies,
  fetchGenres: fetchGenres,
};

export default connect(null, mapDispatchToProps)(Header);
