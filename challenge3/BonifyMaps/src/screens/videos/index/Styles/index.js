import { GRAY_COLOR, BLACK, DARKER_GRAY } from "src/Constants";

export const SingleVideoComponentStyle = {
  topContainer: {
    flex: 1,
    flexBasis: "14%",
    flexDirection: "row",
    padding: 15,
    shadowColor: GRAY_COLOR,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 2,
    shadowOpacity: 0.8,
    marginBottom: 5
  },

  imageContainer: {
    flex: 1,
    height: 100,
    width: 100,
    flexBasis: "25%",
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
    borderRightColor: GRAY_COLOR
  },

  imageContent: {
    height: "50%",
    width: "50%"
  },

  textContainer: {
    flex: 1,
    flexBasis: "25%",
    justifyContent: "center",
    alignItems: "center"
  },

  videoTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: BLACK,
    marginBottom: 5
  },

  videoDuration: {
    fontSize: 14,
    color: DARKER_GRAY
  }
};

export const VideoListContainerStyle = {
  topContainer: {
      flex: 1,
      position: 'relative'
  },
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BLACK
  },
  textContent: {
    fontSize: 16,
    fontWeight: '500',
    width: "60%",
    color: "white"
  }
};
