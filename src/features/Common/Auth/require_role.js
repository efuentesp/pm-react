import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

export default function(role, ComposedComponent) {
  class Authentication extends Component {

    componentWillMount() {
      if (this.props.auth.authenticated) {
        if(this.props.auth.role.indexOf(role) == -1) {
          this.context.router.push('/forbidden');
        }
      } else {
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
