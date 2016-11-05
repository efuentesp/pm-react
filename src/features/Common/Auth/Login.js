import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Panel, Button } from 'react-bootstrap';

import FormTextField from "../../Common/Form/FormTextField";
import { loginUser } from './actions';

class Login extends Component {

  onFormSubmit(props) {
    this.props.loginUser(props.username, props.password);
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return(
        <div className="alert alert-danger" role="alert">{this.props.errorMessage}</div>
      );
    }
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="wrapper">
        <div className="block-center mt-xl wd-xl">
          { /* START panel */ }
          <div className="panel panel-dark panel-flat">
            <div className="panel-heading text-center">
              <a href="#">
                <img src="../../assets/img/logo.png" alt="Image" className="block-center img-rounded" />
              </a>
            </div>
            <Panel>
              <p className="text-center pv">LOGIN</p>
              <form role="form"
                    onSubmit={handleSubmit(this.onFormSubmit.bind(this))}
                    data-parsley-validate=""
                    noValidate className="mb-lg">
                <Field
                  name="username"
                  type="text"
                  component={FormTextField}
                  placeholder="Usuario"
                  icon="fa fa-user" />
                <Field
                  name="password"
                  type="password"
                  component={FormTextField}
                  placeholder="Contraseña"
                  icon="fa fa-lock" />
                <div className="clearfix">
                  <div className="checkbox c-checkbox pull-left mt0">
                    <label>
                      <input type="checkbox" value="" name="remember" />
                      <em className="fa fa-check" />Recordarme
                    </label>
                  </div>
                  <div className="pull-right"><a href="/recover" className="text-muted">¿Olvidaste la contraseña?</a>
                  </div>
                </div>
                { this.renderAlert() }
                <Button type="submit" className="btn btn-block btn-primary mt-lg">Login</Button>
              </form>
            </Panel>
          </div>
          { /* END panel */ }
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  loginUser: PropTypes.func,
  errorMessage: PropTypes.string
};

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error
  };
}

const form = reduxForm({
  form: 'LoginForm'
});

export default connect(mapStateToProps, { loginUser })(form(Login));
