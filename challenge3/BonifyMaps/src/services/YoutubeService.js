import axios from "axios";
import {
  YOUTUBE_API_KEY,
  YOUTUBE_SERVICE_URL,
  YOUTUBE_RETRIEVE_FAIL_MESSAGE,
  EMPTY_VIDEOS_LIST_MESSAGE
} from "src/Constants";


const MAX_RESULTS_PER_PAGE = 10;

/**
 *
 * @name fetchVideosListFromYoutube
 * @param {any} locationData object containng location and page
 * @returns
 */
export const fetchVideosListFromYoutube = async (location, pageToken) => {
  try {
    if (!location) return [];
    const url = `${YOUTUBE_SERVICE_URL}?${yieldStringFromQuery(
      buildQuery({ location, pageToken })
    )}`;
    const response = await axios(url);
    if (!response.data.items.length) throw new Error(EMPTY_VIDEOS_LIST_MESSAGE);
    return formatVideoDataFromResponse(response);
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
  const { location, pageToken } = querySource;
  return {
    type: "video",
    part: "snippet",
    location,
    locationRadius: "5km",
    maxResults: MAX_RESULTS_PER_PAGE,
    order: "date", // arrange them chronologically
    key: YOUTUBE_API_KEY,
    ...((!!pageToken && { pageToken }) || {})
  };
};

/**
 *
 * @name yieldStringFromQuery
 * @desc builds a query string for the qoutube api, no
 * thanks to qs smh
 * @param {any} query
 * @returns {string} the query string
 */
const yieldStringFromQuery = query => {
  return Object.keys(query).reduce((result, key) => {
    if (!result.length) return `${key}=${query[key]}`;
    return `${result}&${key}=${query[key]}`;
  }, "");
};

/**
 *
 * @name formatVideoDataFromResponse
 * @desc takes in the response from youtube and yields the
 * correct and usable data for the application. 
 * @param {any} { data }
 * @returns {obj} the formatted response
 */
const formatVideoDataFromResponse = ({ data }) => {
  const { items, nextPageToken, pageInfo } = data;
  const buildVideosList = () => {
    return items.map(node => {
      return {
        id: node.id.videoId,
        title: node.snippet.title,
        description: node.snippet.description,
        creator: node.snippet.channelTitle,
        backdropImage: node.snippet.thumbnails.default.url
      };
    });
  };
  return {
    videos: buildVideosList(),
    meta: {
      nextPageToken,
      total: pageInfo.totalResults
    }
  };
};
