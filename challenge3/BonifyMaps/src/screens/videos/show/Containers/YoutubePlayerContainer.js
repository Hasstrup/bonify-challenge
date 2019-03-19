import React from "react";
import { View, StyleSheet } from "react-native";
import Youtube from "react-native-youtube";
import PropTypes from "prop-types";
import { YOUTUBE_API_KEY } from "scr/Constants";

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
    <View style={{ ...StyleSheet.absoluteFillObject }}>
      <Youtube
        apiKey={YOUTUBE_API_KEY}
        fullScreen={true}
        videoID={props.videoId}
        onChangeFullScreen={returnToVideosIndexPage}
      />
    </View>
  );
};

YoutubePlayerContainer.propTypes = {
  videoId: PropTypes.string.isRequired,
  navigator: PropTypes.func.isRequired
};
