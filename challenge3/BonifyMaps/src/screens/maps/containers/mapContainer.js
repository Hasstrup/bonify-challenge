import React, { useState, useEffect } from "react";
import Map from "../components/Map/Map";
import * as MapActions from "src/Actions";

/**
 *
 * @name MapContainer
 * @desc handles the data and manipulation logic
 * for map interactions
 * @param {any} props
 * @returns
 */
const MapContainer = props => {
  const [usersLocation, setUsersLocation] = useState({});
  useEffect(() => {
    MapActions.getUsersLocation(setUsersLocation);
  }, []);

  onLocationEventChange = coords => {
    const { handleAddressChange, handleErrorCallback } = props;
    MapActions.handleLocationChange(
      coords,
      handleAddressChange,
      handleErrorCallback
    );
  };

  return (
    <Map
      initialRegion={usersLocation}
      handleLocationChange={onLocationEventChange}
    />
  );
};

MapContainer.propTypes = {
  handleAddressChange: PropTypes.func.isRequired,
  handleErrorCallback: PropTypes.func.isRequired
};

MapContainer.defaultProps = {
  handleAddressChange: (r) => { console.log(r) },
  handleErrorCallback: () => {}
};

export default MapContainer;
