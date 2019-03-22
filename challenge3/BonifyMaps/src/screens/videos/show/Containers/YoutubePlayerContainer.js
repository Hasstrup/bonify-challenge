import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Youtube from "react-native-youtube";
import PropTypes from "prop-types";
import { YOUTUBE_API_KEY, DEVICE_HEIGHT } from "src/Constants";
import { YoutubePlayerContainerStyle as styles } from '../Styles'

/**
 *
 * @name YoutubePlayerContainer
 * @desc takes in the video Id of a project and plays the video
 * in the application if the user does not have the
 * youtube application
 * @param {any} props
 */
export const YoutubePlayerContainer = props => {
  /**
   * @name returnToVideosIndexPage
   * @desc since we are only supporting full video playing
   *
   */
  const returnToVideosIndexPage = () => props.navigator.pop();

  return (
    <View
      style={{
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        position: 'relative',
        backgroundColor: "black"
      }}
    >
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={returnToVideosIndexPage}
      >
        <Text style={styles.closeButtonText}>x</Text>
      </TouchableOpacity>
      <Youtube
        apiKey={YOUTUBE_API_KEY}
        fullScreen={true}
        videoId={props.videoId}
        onChangeFullScreen={returnToVideosIndexPage}
        onError={returnToVideosIndexPage}
        style={{
          alignSelf: "stretch",
          height: DEVICE_HEIGHT,
          backgroundColor: "black"
        }}
      />
    </View>
  );
};

YoutubePlayerContainer.propTypes = {
  videoId: PropTypes.string,
  navigator: PropTypes.object
};
