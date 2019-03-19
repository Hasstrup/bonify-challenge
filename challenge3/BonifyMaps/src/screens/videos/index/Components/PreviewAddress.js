import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Text } from "react-native";
import { WithProcessIndicator } from "src/SharedComponents";
import { PreviewAddressStyle as styles } from "../Styles";

/**
 * @name PreviewAddress
 * @param {any} props
 * @desc Renders the selected location, address to the user
 * @returns {func} React Component
 *
 */
export const PreviewAddress = props => (
  <WithProcessIndicator
    processing={props.processing}
    style={styles.topContainer}
  >
    <Text style={styles.textContent}>
      Showing {props.count} of {props.total} videos in <Text style={styles.address}>{props.address}</Text>
    </Text>
  </WithProcessIndicator>
);

PreviewAddress.propTypes = {
  address: PropTypes.string.isRequired,
  address: PropTypes.string,
  total: PropTypes.number,
  count: PropTypes.count,
  processing: PropTypes.bool
};
