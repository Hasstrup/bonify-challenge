import * as Services from "src/services/YoutubeService";

/**
 *
 * @name SearchVideosInLocation
 * @desc takes in the location and page and lets the service
 * query the data from youtube
 * @param {any} coords
 * @param {number} [page=1]
 * @param {any} successCallback
 * @param {any} errorCallback
 */
export const SearchVideosInLocation = async (
  coords,
  nextPageToken,
  successCallback,
  errorCallback
) => {
  try {
    successCallback(
      await Services.fetchVideosListFromYoutube(coords, nextPageToken)
    );
  } catch (e) {
    errorCallback(e);
  }
};
