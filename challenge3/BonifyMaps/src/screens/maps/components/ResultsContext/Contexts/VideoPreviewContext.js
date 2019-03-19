import React from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity } from "react-native";
import { Button, WithProcessIndicator } from "src/SharedComponents/";
import { VideoPreviewStyle as styles } from "./Styles";

/**
 *
 * @name VideoPreviewContext
 * @desc View for operating with maps. Shows the user's interaction
 * with the map
 * @param {any} props
 */
const VideoPreviewContext = props => (
  <TouchableOpacity style={styles.topContainer} onPress={props.handleButtonPress}>
    <View style={styles.textContainer}>
      <Text style={styles.contentTitle}>{props.address}</Text>
      <Text style={styles.contentDescription}>
        Tap to see videos in this location
      </Text>
    </View>
    <View style={styles.buttonContainer}>
      <WithProcessIndicator
        processing={props.processing}
        indicatorSize={22}
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <Button buttonText="View" handlePress={props.handleButtonPress} />
      </WithProcessIndicator>
    </View>
  </TouchableOpacity>
);

VideoPreviewContext.propTypes = {
  address: PropTypes.string,
  videosCount: PropTypes.number,
  handleButtonPress: PropTypes.func,
  processing: PropTypes.bool
};

export default VideoPreviewContext;
