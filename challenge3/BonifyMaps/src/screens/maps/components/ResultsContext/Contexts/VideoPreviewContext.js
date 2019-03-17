import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import { Button } from "src/SharedComponents/Button";
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
      <Button buttonText="View"  handlePress={props.handleButtonPress} />
    </View>
  </View>
);

VideoPreviewContext.PropTypes = {
  address: PropTypes.string,
  videosCount: PropTypes.number,
  handleButtonPress: PropTypes.func
};

export default VideoPreviewContext;
