import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { logoutUser } from './actions';

class Logout extends Component {

  componentWillMount() {
    this.props.logoutUser();
  }

  render() {
    return (
      <div className="wrapper">
        <div className="abs-center wd-xl">
          <div className="text-center mb-xl">
              <div className="text-lg mb-lg">Hasta luego</div>
              <p className="lead m0">Gracias por usar la aplicación.</p>
              <p>Ha salido de la aplicación exitosamente.</p>
          </div>
          <ul className="list-inline text-center text-sm mb-xl">
            <li><Link to="/" className="text-muted">Ir al Inicio</Link></li>
            <li className="text-muted">|</li>
            <li><Link to="login" className="text-muted">Login</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

Logout.propTypes = {
  logoutUser: PropTypes.func
};

export default connect(null, { logoutUser })(Logout);
