import React, { PureComponent } from "react";
import PropTypes from "prop-types";

function Alert(props) {
  function capitalize(word) {
    var lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitalize(props.alert.type)}</strong>:{props.alert.message}
      </div>
    )
  );
}
Alert.propTypes = {
  alert: PropTypes.shape({
    message: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }),
};
export default Alert;
