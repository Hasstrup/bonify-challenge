import axios from "axios";
import {
  YOUTUBE_API_KEY,
  YOUTUBE_SERVICE_URL,
  YOUTUBE_RETRIEVE_FAIL_MESSAGE
} from "src/Constants";

const MAX_RESULTS_PER_PAGE = 10;

/**
 *
 * @name fetchVideosListFromYoutube
 * @param {any} locationData object containng location and page
 * @returns
 */
export const fetchVideosListFromYoutube = async ({ location, page }) => {
  try {
    const response = await axios(YOUTUBE_SERVICE_URL, {
      query: buildQuery({ location, page })
    });
    console.log(response);
    return response;
  } catch (e) {
    throw new Error(YOUTUBE_RETRIEVE_FAIL_MESSAGE);
  }
};

/**
 *
 * @name buildQuery
 * @desc returns the query for fetching resources from the data
 * @param {any} querySource
 * @returns
 */
const buildQuery = querySource => {
  const { location, page = 1 } = querySource;
  return {
    type: "video",
    part: "snippet",
    location,
    locationRadius: `${location}Radius`,
    maxResults: MAX_RESULTS_PER_PAGE,
    order: "date", // arrange them chronologically
    pageToken: page.toString(),
    key: YOUTUBE_API_KEY
  };
};
