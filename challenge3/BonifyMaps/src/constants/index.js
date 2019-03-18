import { Dimensions } from "react-native";

const DATA_FETCHING = "DATA_FETCHING";
const VIDEO_RESULTS_FETCHED = "VIDEO_RESULTS_FETCHED";
const NEW_USER_CONTEXT = "NEW_USER_CONTEXT";
const UNRESOLVED_COORDINATES_CONTEXT = "UNRESOLVED_COORDS";
const GRAY_COLOR = "#E5E7E9";
const DARKER_GRAY = "#797D7F";
const BLACK = "#29292A";
const INVALID_INPUT_MESSAGE = "Fill in an address please :)";
const COORDS_RETRIEVE_FAILURE_MESSAGE = "Uh oh something wen't wrong fetching that address :(";
const YOUTUBE_SERVICE_URL = "https://www.googleapis.com/youtube/v3/search"
const GOOGLE_MAPS_URL = "https://maps.googleapis.com/maps/api/geocode/json";
const YOUTUBE_RETRIEVE_FAIL_MESSAGE = 'Uh oh we could not find any videos in that location'

export * from '../../env.config.js'

export const { height: DEVICE_HEIGHT, width: DEVICE_WIDTH } = Dimensions.get(
  "window"
);

export {
  DATA_FETCHING,
  VIDEO_RESULTS_FETCHED,
  NEW_USER_CONTEXT,
  UNRESOLVED_COORDINATES_CONTEXT,
  GRAY_COLOR,
  DARKER_GRAY,
  BLACK,
  INVALID_INPUT_MESSAGE,
  COORDS_RETRIEVE_FAILURE_MESSAGE,
  GOOGLE_MAPS_URL,
  YOUTUBE_SERVICE_URL,
  YOUTUBE_RETRIEVE_FAIL_MESSAGE
};

