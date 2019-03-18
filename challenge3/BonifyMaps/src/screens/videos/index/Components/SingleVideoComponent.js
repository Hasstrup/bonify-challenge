import React from "react";
import PropTypes from "prop-types";
import LinearGradient from "react-native-linear-gradient";
import { TouchableOpacity, Text, Image, View } from "react-native";
import { SingleVideoComponentStyle as styles } from "../Styles";
import { BLACK } from "src/Constants";

const GRADIENT_COLORS = ['#000000', `#00000090`, `#00000010`];
/**
 *
 *@name SingleVideoComponent
 * @desc Single Video item which contains information from youtube on the videos
 * @param {any} props
 * @returns {function} React Component
 */
export const SingleVideoComponent = ({ index, item }) => {
  return (
    <TouchableOpacity style={styles.topContainer}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.backdropImage }} style={styles.imageContent} />
      </View>
      <LinearGradient
        style={styles.gradientContainer}
        colors={GRADIENT_COLORS}
      >
          <Text style={styles.videoTitle}>{item.title}</Text>
          <Text style={styles.creator}>{item.creator}</Text>
          <Text style={styles.description}>{item.description}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
SingleVideoComponent.propTypes = {
  textContent: PropTypes.string,
  imageSource: PropTypes.string,
  handlePress: PropTypes.func
};
