import { StyleSheet } from "react-native";
import {
  RED,
  BLACK,
  DARKER_GRAY,
  DEVICE_HEIGHT,
  QUASI_BLACK,
  GRAY_COLOR
} from "src/Constants";

export const SingleVideoComponentStyle = {
  topContainer: {
    flex: 1,
    flexBasis: "15%",
    height: DEVICE_HEIGHT / 2.5,
    position: "relative",
    justifyContent: "space-around",
    marginBottom: 60,
  },

  imageContainer: {
    flex: 1,
    flexBasis: "65%",
    position: "relative",
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
    width: "90%",
    fontWeight: "700",
    color: BLACK,
    marginBottom: 8
  },

  creator: {
    fontSize: 15,
    color: QUASI_BLACK,
    marginBottom: 8
  },

  description: {
    fontSize: 12.3,
    color: DARKER_GRAY,
    width: "95%"
  },

  ageContainer: {
    height: 25,
    width: 98,
    padding: 5,
    backgroundColor: RED,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5
  },

  ageContent: {
    fontSize: 13.5,
    fontWeight: "600",
    color: 'white'
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
    fontSize: 15,
    fontWeight: "800",
    width: "80%",
    color: DARKER_GRAY
  },
  address: {
    color: "#CACFD2"
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
