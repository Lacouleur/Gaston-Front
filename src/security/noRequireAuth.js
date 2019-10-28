import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default function(ComposedComponent) {
  class NotAuthentication extends React.Component {
    componentWillMount() {
      if (this.props.authenticated) {
        this.props.history.push('/postList');
      }
    }
    componentWillUpdate(nextProps) {
      if (nextProps.authenticated) {
        this.props.history.push('/postList');
      }
    }
    render() {
      return <ComposedComponent {...this.props} />;
    }
  }
  NotAuthentication.propTypes = {
    router: PropTypes.object,
  };
  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
  }
  return connect(mapStateToProps)(NotAuthentication);
}
