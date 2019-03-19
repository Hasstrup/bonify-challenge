import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Text, Image, View } from "react-native";
import { SingleVideoComponentStyle as styles } from "../Styles";
import { VideoOverlay } from "./OverLayComponent";

const DummyYoutubeData = {
  backdropImage:
    "https://images.unsplash.com/photo-1552640195-a7c44126dc5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  description: `You are seeing this probably because your api key is broken or you did not supply one at all. Did you miss that step while installing? Feel free to reach out to hasstrup.ezekiel@gmail.com for his :)`,
  creator: "Hasstrup Ezekiel",
  title: "Looks like something is broken and I dont know how to fix it this also sucks",
  id: "uAPtECO99OU",
  age: "2d ago"
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
        handlePress(node.id);
      }}
      style={styles.topContainer}
    >
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: node.backdropImage }}
          style={styles.imageContent}
        />
      </View>
      <VideoOverlay handlePress={() => handlePress(node.id)} />
      <View style={styles.gradientContainer}>
        <Text style={styles.videoTitle}>{node.title}</Text>
        <Text style={styles.creator}>{node.creator}</Text>
        <View style={styles.ageContainer}>
          <Text style={styles.ageContent}>{node.age}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
SingleVideoComponent.propTypes = {
  textContent: PropTypes.string,
  imageSource: PropTypes.string,
  handlePress: PropTypes.func
};
