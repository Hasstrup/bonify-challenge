import axios from "axios";
import {
  GOOGLE_MAPS_URL,
  INVALID_INPUT_MESSAGE,
  COORDS_RETRIEVE_FAILURE_MESSAGE
} from "src/Constants";

const API_KEY = process.env.GOOGLE_MAPS_API_KEY;
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
    console.log(err); // remove this before final build
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
    if (!latLng || !latLng.trim().length) {
      throw new Error(INVALID_INPUT_MESSAGE);
    }
    const url = `${GOOGLE_MAPS_URL}?key=${API_KEY}&latlng=${latLng}`;
    const result = await axios(url);
    return result;
  } catch (e) {
    console.log(err); // remove this before final build
    throw new Error(COORDS_RETRIEVE_FAILURE_MESSAGE);
  }
};

const prepareAddress = address => address.replace(/ /, "+");
