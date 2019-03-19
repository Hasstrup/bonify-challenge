import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
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
  <View style={styles.topContainer}>
    <View style={styles.textContainer}>
      <Text style={styles.contentTitle}>{props.address}</Text>
      <Text style={styles.contentDescription}> We found 25 Videos</Text>
    </View>
    <View style={styles.buttonContainer}>
      <WithProcessIndicator processing={props.processing} indicatorSize={22}>
        <Button buttonText="View" handlePress={props.handleButtonPress} />
      </WithProcessIndicator>
    </View>
  </View>
);

VideoPreviewContext.propTypes = {
  address: PropTypes.string,
  videosCount: PropTypes.number,
  handleButtonPress: PropTypes.func,
  processing: PropTypes.bool
};

export default VideoPreviewContext;
