import React from "react";
import { View } from "react-native";
import { setNavigatorProp, setNavigationOptions } from "src/navigation/actions";
import VideoListContainer from "./Containers/VideoListContainer";
import { BLACK } from "src/Constants/";

/**
 *
 * @name VideosIndexScreen
 * @desc Parent Component for the View Videos Screen
 * @param {any} props
 * @returns
 */
export const VideosIndexScreen = props => {
  const navigationOptions = {
    topBar: {
      title: {
        text: 'Videos'
      },  
    }
  };

  const { componentId } = props;
  
  setNavigationOptions(componentId, navigationOptions)
  const navigator = setNavigatorProp(props.componentId);

  return (
    <View style={{ flex: 1, padding: 15 }}>
      <VideoListContainer navigator={navigator} />
    </View>
  );
};

VideosIndexScreen.options = () => ({});
