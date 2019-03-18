import React, { useState, useEffect } from "react";
import { FlatList, View, Text } from "react-native";
import PropTypes from "prop-types";
import * as VideoActions from "src/Actions/VideoActions";
import { SingleVideoComponent, PreviewAddress } from "../Components/";
import { VideoListContainerStyle as styles } from "../Styles";


/**
 *
 * @name VideoList
 * @desc data logic for interacting the Youtube APi
 * @param {any} props
 * @returns
 */
const VideoListContainer = props => {
  const { videosList, location } = props;
  const intitialState = {
    fetching: false,
    videos: [],
    page: 1,
    errors: false
  };

  const [state, setState] = useState(intitialState);

  // get the videos from the first page on mount and clean up after unmount
  useEffect(() => {
    getVideosFromYoutube();
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
      state.page,
      handleRequestSucess,
      handleRequesFailure
    );
  };

  const resetState = () => setState(intitialState);

  const handleRequestSucess = videos => {
    setState({ ...state, videos: [...state.videos, ...(videos || [])], errors: false });
  };

  const handleRequesFailure = err => {
    setState({ ...state, errors: err.message });
  };

  const keyExtractor = (item, index) => `${item}`;

  return (
    <View style={styles.topContainer}>
      <FlatList
        keyExtractor={keyExtractor}
        data={videosList}
        renderItem={SingleVideoComponent}
        ListFooterComponent={PreviewAddress}
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
  videosList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
};

export default VideoListContainer;
