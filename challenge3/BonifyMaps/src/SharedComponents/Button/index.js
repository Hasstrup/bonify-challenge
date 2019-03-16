import React from "react";
import { TouchableOpacity, Text } from "react-native";
import PropTypes from "prop-types";
import defaultStyles from "./styles";

/**
 *
 * @name Button
 * @param {any} {
 *   buttonText,
 *   handlePress,
 *   buttonContainerStyle,
 *   buttonTextStyle
 * }
 * @desc Button Component used throughout the application.
 * takes in a compulsory handlePress and buttonText, and optional
 * styles for the button and the text
 * @returns {func} The Button Component
 */
export const Button = ({
  buttonText,
  handlePress,
  buttonContainerStyle,
  buttonTextStyle
}) => (
  <TouchableOpacity
    style={{
      ...defaultStyles.buttonContainerStyle,
      ...buttonContainerStyle
    }}
    onPress={handlePress}
  >
    <Text style={{ ...defaultStyles.buttonTextStyle, ...buttonTextStyle }}>
      {buttonText}
    </Text>
  </TouchableOpacity>
);

Button.PropTypes = {
  buttonText: PropTypes.string.isRequired,
  handlePress: PropTypes.func.isRequired,
  buttonContainerStyle: PropTypes.object,
  buttonTextStyle: PropTypes.object
};

Button.defaultProps = {
  buttonText: "",
  handlePress: () => {},
  buttonContainterStyle: {},
  buttonTextStyle: {}
};
