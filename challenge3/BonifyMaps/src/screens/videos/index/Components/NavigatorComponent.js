import React from "react";
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { CustomNavigatorStyle as styles } from "../Styles";

/**
 * 
 * @name CustomNavigator
 * @desc Replaces the header on the videos index page
 * @param {any} props 
 */
export const CustomNavigator = props => (
  <View style={styles.topContainer}>
    <TouchableOpacity style={styles.buttonContainer}>
      <Icon name="arrow-back" color={white} size={24} />
    </TouchableOpacity>
    <Text style={styles.headerText}>Videos</Text>
  </View>
);


CustomNavigator.propTypes = {
    navigator: PropTypes.func.isRequired,
}