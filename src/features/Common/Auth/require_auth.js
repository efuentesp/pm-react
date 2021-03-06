import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
  class Authentication extends Component {

    componentWillMount() {
      console.log("RequireAuth:componentWillMount", this.props.auth);
      if (!this.props.auth.authenticated) {
        this.context.router.push('/login');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  Authentication.contextTypes = {
    router: PropTypes.object.isRequired
  };

  Authentication.propTypes = {
    auth: PropTypes.object.isRequired
  };

  function mapStateToProps(state) {
    return { auth: state.auth };
  }

  return connect(mapStateToProps)(Authentication);
}
