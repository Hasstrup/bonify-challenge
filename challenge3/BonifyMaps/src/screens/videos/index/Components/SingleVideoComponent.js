import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Text, Image, View } from "react-native";
import { SingleVideoComponentStyle as styles } from "../Styles";
import { VideoOverlay } from './OverLayComponent'


const DummyYoutubeData = {
  backdropImage:
    "https://images.unsplash.com/photo-1552640195-a7c44126dc5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  description:
    "This is a text description which should ideally not make any sense and all of that but who knows and who cares",
  creator: "Hasstrup Ezekiel",
  title: "Pretty neat",
  id: "Y3_RT8KT_IA"
};

/**
 *
 *@name SingleVideoComponent
 * @desc Single Video item which contains information from youtube on the videos
 * @param {any} props
 * @returns {function} React Component
 */
export const SingleVideoComponent = ({ item, handlePress }) => {
  const node = item.id ? item : DummyYoutubeData;
  return (
    <TouchableOpacity
      onPress={() => {
        handlePress(item.id);
      }}
      style={styles.topContainer}
    >
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: node.backdropImage }}
          style={styles.imageContent}
        />
      </View>
      <VideoOverlay />
      <View
        style={styles.gradientContainer}
      >
        <Text style={styles.videoTitle}>{node.title}</Text>
        <Text style={styles.creator}>{node.creator}</Text>
        <Text style={styles.description}>{node.description}</Text>
      </View>
    </TouchableOpacity>
  );
};
SingleVideoComponent.propTypes = {
  textContent: PropTypes.string,
  imageSource: PropTypes.string,
  handlePress: PropTypes.func
};
