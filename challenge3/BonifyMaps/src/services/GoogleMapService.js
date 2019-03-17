import axios from "axios";
import {
  GOOGLE_MAPS_URL,
  INVALID_INPUT_MESSAGE,
  COORDS_RETRIEVE_FAILURE_MESSAGE,
  GOOGLE_MAPS_API_KEY as API_KEY
} from "src/Constants";
import { regionFromLatLong } from "src/Actions/MapActions";

/**
 * @name CoordinatesFromAddress
 * @desc Takes an address, makes a call to google's map service
 * and returns the coordinates as a json response
 * @param {any} address
 * @returns {obj} the coordinates response from the Google maps api
 */
export const CoordinatesFromAddress = async address => {
  try {
    if (!address || !address.trim().length) {
      throw new Error(INVALID_INPUT_MESSAGE);
    }
    const url = `${GOOGLE_MAPS_URL}?key=${API_KEY}&address=${prepareAddress(
      address
    )}`;
    const result = await axios(url);
    return result;
  } catch (err) {
    throw new Error(COORDS_RETRIEVE_FAILURE_MESSAGE);
  }
};

/**
 *
 * @name AddressFromCoordinates
 * @param {string} latLng the latitude and longitude
 * selected (concantenated into a string)
 * @desc Takes the latLng and makes a call to the googleMapsService,
 * returns the address and the extra details from google
 * @returns {object} the response from the google maps api
 */
export const AddressFromCoordinates = async latLng => {
  try {
    const url = `${GOOGLE_MAPS_URL}?key=${API_KEY}&latlng=${latLng}`;
    const result = await axios(url);
    return yieldAddressAndCoordinatesFromResponse(result);
  } catch (e) {
    console.log(err); // remove this before final build
    throw new Error(COORDS_RETRIEVE_FAILURE_MESSAGE);
  }
};

const prepareAddress = address => address.replace(/ /, "+");

/**
 *
 * @name yieldAddressAndCoordinatesFromResponse
 * @desc Takes in the response from the google maps service and yields
 * the formatted_address and coords of the closest match to the input
 * specified
 * @param {any} response
 * @returns {object} the payload necessay for interaction in the map
 */
const yieldAddressAndCoordinatesFromResponse = response => {
  const { data } = response;
  // we'll display the first result to display to the user, to fetch videos from
  const [closestResult] = data.results;
  const {
    formated_address,
    geometry: {
      location: { lat, lng }
    }
  } = closestResult;
  return {
    address: formated_address,
    latLng: `${lat},${lng}`,
    mapData: regionFromLatLong({ latitude: lat, longitude: lng, accuracy: 6 })
  };
};
