import React from "react";
import { View, Text } from "react-native";
import { Button } from "src/SharedComponents/Button";
import { VideoPreviewStyle as styles } from './Styles';

/**
 * 
 * @name VideoPreviewContext
 * @desc View for operating with maps. Shows the user's interaction 
 * with the map 
 * @param {any} props 
 */
const VideoPreviewContext = props => (
  <View style={styles.topContainer}>
    <View style={styles.textContainer}>
      <Text style={styles.contentTitle}> 25 Pepple Street Surulere</Text>
      <Text style={styles.contentDescription}> We found 25 Videos</Text>
    </View>
    <View style={styles.buttonContainer}>
      <Button 
        buttonText="View"
      />
    </View>
  </View>
);

export default VideoPreviewContext;
