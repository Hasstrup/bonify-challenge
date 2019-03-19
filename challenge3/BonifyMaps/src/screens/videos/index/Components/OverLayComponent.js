import React from "react";
import { TouchableOpacity } from "react-native";
import PropTypes from 'prop-types';
import Icon from "react-native-vector-icons/MaterialIcons";
import { VideoOverlayStyle as styles } from '../Styles'
import { GRAY } from 'src/Constants';

 /**
 * 
 * @name VideoOverlay
 * @desc renders the Play button over the video image
 * @param {any} props 
 */
export const VideoOverlay = props => (
  <TouchableOpacity style={styles.topContainer}>
    <Icon name="play-circle-outline" size={65} color="#D7DBDD" />
  </TouchableOpacity>
);

VideoOverlay.propTypes = {
    duration: PropTypes.string
}