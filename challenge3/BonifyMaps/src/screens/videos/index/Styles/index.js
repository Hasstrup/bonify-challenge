import { StyleSheet } from 'react-native';
import { GRAY_COLOR, BLACK, DARKER_GRAY, DEVICE_HEIGHT, QUASI_BLACK } from "src/Constants";

export const SingleVideoComponentStyle = {
  topContainer: {
    flex: 1,
    flexBasis: "15%",
    height: DEVICE_HEIGHT / 5,
    position: 'relative',
    borderWidth: 1,
    borderRadius: 2,
    marginBottom: (DEVICE_HEIGHT * 0.1) / 6,
  },

  imageContainer: {
    flex: 1,
    flexBasis: '100%',
  },

  imageContent: {
    flex: 1,
    height: "100%",
    width: "100%"
  },

  gradientContainer: {
    flex: 1,
    width: '100%',
    flexBasis: "35%",
    position: 'absolute',
    bottom: 0,
    justifyContent: 'flex-end',
    paddingLeft: 5
  },

  textContainer: {
      flexBasis: '20%',
      width: '40%',
  },

  videoTitle: {
    fontSize: 17,
    width: '80%',
    fontWeight: "500",
    color: 'white',
    marginBottom: 5
  },

  metaContainer: {

  },

  creator: {
      fontSize: 15,
      color: 'white',
      marginBottom: 6
  },

  description: {
      fontSize: 14,
      color: 'white',
      width: '90%'
  }
};

export const VideoListContainerStyle = {
  topContainer: {
    flex: 1,
  },
  
  flatListContainer: {
      flex: 1,
      position: 'relative',
      backgroundColor: QUASI_BLACK
  }
};

/**
 * @name PreviewAddressStyle
 * @desc Style for the preview address bar
 */
export const PreviewAddressStyle = {
  topContainer: {
    height: "20%",
    width: "80%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  textContent: {
    fontSize: 13,
    fontWeight: "500",
    width: "80%",
    color: DARKER_GRAY
  }
};

export const VideoScreenStyle = {
    topContainer: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'space-around',
        backgroundColor: QUASI_BLACK,
        paddingRight: '5%',
        paddingLeft: '5%',
    }
}
