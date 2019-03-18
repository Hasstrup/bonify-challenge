import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet } from "react-native";
import { setNavigatorProp, setNavigationOptions } from "src/navigation/actions";
import VideoListContainer from "./Containers/VideoListContainer";
import { BLACK, QUASI_BLACK } from "src/Constants/";
import { VideoScreenStyle as styles } from './Styles';

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
      visible: false
    }
  };

  const { componentId } = props;

  setNavigationOptions(componentId, navigationOptions);
  const navigator = setNavigatorProp(props.componentId);

  return (
    <View style={styles.topContainer}>
      <VideoListContainer location={props.location} navigator={navigator} />
    </View>
  );
};

VideosIndexScreen.propTypes = {
  location: PropTypes.string.isRequired,
  navigator: PropTypes.func.isRequired4
};

VideosIndexScreen.options = () => ({});
