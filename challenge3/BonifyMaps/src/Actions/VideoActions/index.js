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
  page = 1,
  successCallback,
  errorCallback
) => {
  try {
    // TODO You'll definitely need to format the response
    successCallback(
      await Services.fetchVideosListFromYoutube({
        location: coords,
        page
      })
    );
  } catch (e) {
    errorCallback(e);
  }
};
