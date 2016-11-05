import React, { Component, PropTypes } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';

class FormTextField extends Component {

  renderLabel(label) {
    if (label) {
      return(
        <ControlLabel>{label}</ControlLabel>
      );
    }
  }

  renderIcon(icon) {
    if (icon) {
      icon = icon + " form-control-feedback text-muted";
      return(
        <span className={icon} />
      );
    }
  }

  render() {
    const { type, input, name, meta, label, placeholder, icon } = this.props;

    if (type == "label") {
      return(
        <FormGroup>
          <ControlLabel>{label}</ControlLabel>
          <FormControl.Static>{input.value}</FormControl.Static>
        </FormGroup>
      );
    }

    return(
      <FormGroup
        controlId={name}
        validationState={meta.dirty && meta.invalid ? "error" : null}>
        { this.renderLabel(label) }
        <FormControl
          {...input}
          placeholder={placeholder}
          autoComplete="off"
          type={type} />
        { this.renderIcon(icon) }
        <FormControl.Feedback />
        <HelpBlock>{meta.error}</HelpBlock>
      </FormGroup>
    );
  }
}

FormTextField.propTypes = {
  type: PropTypes.string,
  input: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  submitting: PropTypes.bool
};

export default FormTextField;
