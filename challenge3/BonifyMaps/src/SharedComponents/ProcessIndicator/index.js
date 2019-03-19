import React from "react";
import { View, ActivityIndicator } from "react-native";
import { WaveIndicator } from "react-native-indicators";
import { BLACK } from "src/Constants";
import PropTypes from "prop-types";
import defaultStyles from "./styles";

/**
 *
 * @name ProcessIndicator
 * @param {any} props
 * @desc shows that a process is happening in the background
 * @returns {func} The ProcessIndicatorComponent
 */
export const ProcessIndicator = ({ indicatorSize }) => (
  <View style={defaultStyles.processIndicatorStyle}>
    <ActivityIndicator size={indicatorSize} color={BLACK} />
  </View>
);

/**
 *
 * @name WithProcessIndicator
 * @desc depending on a processing prop,
 * renders the loading indicator
 * @param {any} {
 *   processing,
 *   children,
 *   indicatorSize
 * }
 */
export const WithProcessIndicator = ({
  processing,
  children,
  style
}) => (
  <View style={{ flex: 1, ...style }}>
    {processing ? <ProcessIndicator /> : children}
  </View>
);

WithProcessIndicator.propTypes = {
  children: PropTypes.array.isRequired,
  processing: PropTypes.bool.isRequired,
  style: PropTypes.object
};

ProcessIndicator.propTypes = {
  indicatorSize: PropTypes.string
};

ProcessIndicator.defaultProps = {
  indicatorSize: "large"
};
