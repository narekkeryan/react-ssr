import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Status from '../components/Status';

class NotFound extends Component {
  componentDidMount() {
    this.props.errNotFound();
  }

  render() {
    return (
      <Status code={404}>
        <div className="container-fluid">
          <p>Sorry, can't find that.</p>
        </div>
      </Status>
    );
  }
}

NotFound.propTypes = {
  errNotFound: PropTypes.func.isRequired,
};

export default NotFound;