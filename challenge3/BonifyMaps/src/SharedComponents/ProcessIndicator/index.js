import React from "react";
import { View, Text } from "react-native";
import { PulseIndicator } from "react-native-indicators";
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
    <PulseIndicator size={indicatorSize} color={BLACK} />
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
  indicatorSize
}) => (
  <View style={{ flex: 1 }}>
    {processing ? <ProcessIndicator indicatorSize={indicatorSize} /> : children}
  </View>
);

WithProcessIndicator.propTypes = {
  children: PropTypes.array.isRequired,
  processing: PropTypes.bool.isRequired,
  indicatorSize: PropTypes.number
};

ProcessIndicator.propTypes = {
  indicatorSize: PropTypes.number
};

ProcessIndicator.defaultProps = {
  indicatorSize: 14
};
