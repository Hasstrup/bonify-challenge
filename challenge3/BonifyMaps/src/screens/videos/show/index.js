import React from "react";
import PropTypes from 'prop-types';
import { View } from "react-native";
import { setNavigatorProp } from "src/navigation/actions";
import YoutubePlayerContainer from "./Containers";

/**
 * 
 * @name VideosShowScreen
 * @desc renders the youtube player if there is no native youtube 
 * application 
 * @param {any} props 
 * @returns {func} React Component (VideosShowScreen)
 */
const VideosShowScreen = (props) => {
   const navigator = setNavigatorProp(props.componentId)
  return (
    <View style={{ flex: 1 }}> 
      <YoutubePlayerContainer 
        navigator={navigator}
        videoId={props.videoId}
      />
    </View>
  )
}

VideosShowScreen.propTypes = {
  videoId: PropTypes.string.isRequired
}
