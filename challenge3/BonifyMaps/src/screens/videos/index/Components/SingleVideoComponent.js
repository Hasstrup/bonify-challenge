import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, Image, View } from 'react-native';
import { SingleVideoComponentStyle as styles } from '../Styles';



const URI = 'https://images.unsplash.com/photo-1552640195-a7c44126dc5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
 /**
 * 
 *@name SingleVideoComponent
 * @desc Single Video item which contains information from youtube on the videos 
 * @param {any} props 
 * @returns {function} React Component 
 */
export const SingleVideoComponent = (props) => {
   console.log(props);
    return (
    <TouchableOpacity style={styles.topContainer}> 
        <View style={styles.imageContainer}> 
        <Image 
           source={{ uri: URI }}
           style={styles.imageContent}
        />
        </View>
       <View style={styles.textContainer}> 
           <Text style={styles.videoTitle}>{props.item}</Text>
           <Text style={styles.videoDuration}>06:04</Text>
       </View>  
    </TouchableOpacity>
)
    }
SingleVideoComponent.propTypes = {
    textContent: PropTypes.string,
    imageSource: PropTypes.string,
    handlePress: PropTypes.func
}