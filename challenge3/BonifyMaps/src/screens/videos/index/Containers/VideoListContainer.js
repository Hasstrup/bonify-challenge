import React, { useState, useEffect } from "react";
import { FlatList, View, Text } from "react-native";
import PropTypes from "prop-types";
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
  const { videosList } = props;
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
