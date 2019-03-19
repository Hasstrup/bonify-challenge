import { StyleSheet } from "react-native";
import {
  GRAY_COLOR,
  BLACK,
  DARKER_GRAY,
  DEVICE_HEIGHT,
  QUASI_BLACK
} from "src/Constants";

export const SingleVideoComponentStyle = {
  topContainer: {
    flex: 1,
    flexBasis: "15%",
    height: DEVICE_HEIGHT / 2.5,
    position: "relative",
    justifyContent: "space-around",
    marginBottom: (DEVICE_HEIGHT * 0.1) / 6
  },

  imageContainer: {
    flex: 1,
    flexBasis: "65%",
    position: 'relative',
    marginBottom: 40
  },

  imageContent: {
    flex: 1,
    height: "100%",
    width: "100%"
  },

  gradientContainer: {
    flex: 1,
    width: "100%",
    flexBasis: "35%",
    paddingRight: 10,
    paddingBottom: 5
  },

  textContainer: {
    flexBasis: "20%",
    width: "40%"
  },

  videoTitle: {
    fontSize: 18,
    width: "80%",
    fontWeight: "700",
    color: BLACK,
    marginBottom: 5
  },

  creator: {
    fontSize: 14,
    color: QUASI_BLACK,
    marginBottom: 6
  },

  description: {
    fontSize: 13.3,
    color: DARKER_GRAY,
    width: "95%"
  }
};

export const VideoListContainerStyle = {
  topContainer: {
    flex: 1,
    paddingTop: 70
  },

  flatListContainer: {
    flex: 1,
    position: "relative"
  },

  screenTitle: {
    fontSize: 18,
    color: "white",
    fontWeight: "700",
    marginBottom: 40,
    alignSelf: "center"
  }
};

/**
 * @name PreviewAddressStyle
 * @desc Style for the preview address bar
 */
export const PreviewAddressStyle = {
  topContainer: {
    height: "10%",
    width: "80%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center"
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
    justifyContent: "space-around",
    paddingRight: "5%",
    paddingLeft: "5%"
  }
};

export const CustomNavigatorStyle = {
  topContainer: {
    flex: 1,
    marginBottom: 10,
    flexDirection: "row"
  },

  buttonContainer: {
    height: 50,
    width: 60,
    alignSelf: "flex-start"
  },

  headerText: {
    fontSize: 28,
    color: BLACK,
    fontWeight: "700",
    marginBottom: 40,
    alignSelf: "center"
  }
};

export const VideoOverlayStyle = {
  topContainer: {
    flex: 1,
    height: "65%",
    width: "100%",
    position: "absolute",
    top: -9,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
    backgroundColor: "#00000030"
  }
};
