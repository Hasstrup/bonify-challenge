import * as MapServices from "src/services/GoogleMapsService";
/**
 *
 * @name fetchUsersCurrentLocation
 * @desc Gets the current location of the user, wraps the
 * navigator.geolocation.getCurrentPosition of the user and
 * is to be fed into the map as the initial region
 * @returns {func}
 */
export const fetchUsersCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude, accuracy } }) => {
        resolve(regionFromLatLong({ latitude, longitude, accuracy }));
      },
      error => reject(error)
    );
  });
};

/**
 *
 * @name regionFromLatLong
 * @returns {object} the standard region params
 * @desc calculates the longitude delta & latitude delta from
 * the accuracy & lat & long
 * @param {any} { latitude, longitude, accuracy }
 * @returns
 */
const regionFromLatLong = ({ latitude, longitude, accuracy }) => {
  const degreeOfLatitudeToMeters = 111.32 * 1000;
  const latitudeDelta = accuracy / degreeOfLatitudeToMeters;
  const longitudeDelta =
    accuracy /
    (degreeOfLatitudeToMeters * Math.cos(latitude * (Math.PI / 180)));
  return {
    latitude,
    longitude,
    latitudeDelta,
    longitudeDelta
  };
};

/**
 *
 * @name getUsersLocation
 * @desc initial hook that gets a users locationn
 * @param {any} updateState
 */
export const getUsersLocation = async updateState => {
  const coords = await MapActions.fetchUsersCurrentLocation();
  updateState(coords);
};

/**
 *
 * @name handleLocationTap
 * @desc listens for changes in user
 * interaction with the map
 * @param {object} coords
 * @param {func} callback
 */
export const handleLocationChange = async (coords, successCallback, errorCallback) => {
  try {
    const latLng = coords.hasOwnPerty("coordinate")  ? coords.coordinate : `${coords.latitude}, ${coords.longitude}`;
    successCallback(await MapServices.AddressFromCoordinates(latLng));
  } catch (err) {
    errorCallback(err);
  }
};
