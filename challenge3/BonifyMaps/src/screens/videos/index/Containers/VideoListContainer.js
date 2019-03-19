import React, { useState, useEffect } from "react";
import { FlatList, View, Text, Linking } from "react-native";
import PropTypes from "prop-types";
import * as VideoActions from "src/Actions/VideoActions";
import config from "src/config.json";
import {
  SingleVideoComponent,
  PreviewAddress,
  CustomNavigator
} from "../Components/";
import { VideoListContainerStyle as styles } from "../Styles";

/**
 *
 * @name VideoList
 * @desc data logic for interacting the Youtube APi
 * @param {any} props
 * @returns
 */
const VideoListContainer = props => {
  const { location, navigator } = props;
  const intitialState = {
    fetching: false,
    videos: [1, 2, 3],
    errors: false
  };

  const [state, setState] = useState(intitialState);

  //get the videos from the first page on mount and clean up after unmount
  useEffect(() => {
    // getVideosFromYoutube();
    return resetState;
  }, []);

  /**
   * @name getVideosFormYoutube
   * @desc handler that invokes the VideoActions to get the youtube data
   * @returns {func}
   */
  const getVideosFromYoutube = () => {
    VideoActions.SearchVideosInLocation(
      location,
      state.nextPageToken,
      handleRequestSuccess,
      handleRequesFailure
    );
  };

  /**
   * @name resetState
   * @desc cleans Up (sets initial values of) the state
   * after the component unmounts.
   */
  const resetState = () => setState(intitialState);

  /**
   *
   * @name handleRequestSuccess
   * @desc updates state after the videos are fetched from youtube
   * @param {any} { videos, meta }
   */
  const handleRequestSuccess = ({ videos, meta }) => {
    setState({
      ...state,
      videos: [...state.videos, ...(videos || [])],
      errors: false,
      nextPageToken: meta.nextPageToken,
      total: meta.total
    });
  };

  /**
   *
   * @name handleRequesFailure
   * @desc updates the error key of the state to reflect
   *  the problem of the current request iteration
   * @param {any} err
   */
  const handleRequesFailure = err => {
    setState({ ...state, errors: err.message });
  };

  const handleItemPress = videoId => {
    if (config.playVideosInApp) return playVideoInApp(videoId);
    const url = `https://www.youtube.com/watch?v=${videoId}`;
    Linking.canOpenURL(url).then(deviceCanOpen => {
      if (deviceCanOpen) {
        Linking.openURL(url);
      } else {
        playVideoInApp();
      }
    });
  };

  /**
   * @name playVideoInApp
   * @desc sends the video to the youtube component embedded in the
   * application. Modify the config.json to make this the default action
   *
   */
  const playVideoInApp = videoId => {
    navigator.push({
      component: {
        name: "VideosShowScreen",
        passProps: {
          videoId
        }
      }
    });
  };

  return (
    <View style={styles.topContainer}>
      <FlatList
        keyExtractor={item => item.id}
        data={state.videos}
        renderItem={props => (
          <SingleVideoComponent {...props} handlePress={handleItemPress} />
        )}
        ListFooterComponent={() => <PreviewAddress />}
        ListHeaderComponent={() => <CustomNavigator navigator={navigator} />}
        style={styles.flatListContainer}
      />
    </View>
  );
};

VideoListContainer.propTypes = {
  videosList: PropTypes.array,
  navigator: PropTypes.func.isRequired
};

VideoListContainer.defaultProps = {
  videosList: []
};

export default VideoListContainer;
