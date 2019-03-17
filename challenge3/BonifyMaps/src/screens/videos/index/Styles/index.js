import { GRAY_COLOR, BLACK, DARKER_GRAY, DEVICE_HEIGHT } from "src/Constants";

export const SingleVideoComponentStyle = {
  topContainer: {
    flex: 1,
    flexBasis: "8%",
    flexDirection: "row",
    padding: 15,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: GRAY_COLOR,
    marginBottom: (DEVICE_HEIGHT * 0.1) / 6,
    shadowColor: GRAY_COLOR,
    backgroundColor: 'white',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: .4
  },

  imageContainer: {
    flex: 1,
    flexBasis: "25%",
    justifyContent: "center",
    alignItems: "flex-start",
    borderRightWidth: 1,
    borderRightColor: GRAY_COLOR
  },

  imageContent: {
    height: "70%",
    width: "70%"
  },

  textContainer: {
    flex: 1,
    flexBasis: "70%",
    justifyContent: "center",
    paddingLeft: 15
  },

  videoTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: BLACK,
    marginBottom: 5
  },

  videoDuration: {
    fontSize: 13,
    color: DARKER_GRAY
  }
};

export const VideoListContainerStyle = {
  topContainer: {
    flex: 1,
    position: "relative"
  }
};

/**
 * @name PreviewAddressStyle
 * @desc Style for the preview address bar
 */
export const PreviewAddressStyle = {
  topContainer: {
    height: "5%",
    width: "80%",
    alignSelf: "center",
    position: "absolute",
    bottom: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: BLACK
  },
  textContent: {
    fontSize: 16,
    fontWeight: "500",
    width: "80%",
    color: "white"
  }
};
