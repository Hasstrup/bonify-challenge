import React from "react";
import PropTypes from "prop-types";
import LinearGradient from "react-native-linear-gradient";
import { TouchableOpacity, Text, Image, View } from "react-native";
import { SingleVideoComponentStyle as styles } from "../Styles";

const GRADIENT_COLORS = ["#000000", `#00000060`, `#00000010`];
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
        <Image
          source={{
            uri:
              "https://images.unsplash.com/photo-1552640195-a7c44126dc5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          }}
          style={styles.imageContent}
        />
      </View>
      <LinearGradient
        style={styles.gradientContainer}
        colors={GRADIENT_COLORS}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 1 }}
        locations={[0.8, 0.2, 0.2]}
      >
        <Text style={styles.videoTitle}>
          {item.title || "This is a really really long title"}
        </Text>
        <Text style={styles.creator}>{item.creator || "Creator"}</Text>
        <Text style={styles.description}>
          {item.description ||
            "This is a text description which should ideally not make any sense and all of that but who knows and who cares "}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
SingleVideoComponent.propTypes = {
  textContent: PropTypes.string,
  imageSource: PropTypes.string,
  handlePress: PropTypes.func
};
