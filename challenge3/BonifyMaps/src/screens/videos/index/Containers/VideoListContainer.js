import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
import PropTypes from "prop-types";
import { SingleVideoComponent, PreviewAddress } from "../Components/";


/**
 * 
 * @name VideoList
 * @desc data logic for interacting the Youtube APi
 * @param {any} props 
 * @returns 
 */
const VideoListContainer = props => {
  const { data } = props;
  return (
    <View> 
      <FlatList data={data} renderItem={SingleVideoComponent} />
      <PreviewAddress />
    </View>

  );
};

VideoListContainer.propTypes = {
  data: PropTypes.array
};

VideoListContainer.defaultProps = {
  data: []
};

export default VideoListContainer;
