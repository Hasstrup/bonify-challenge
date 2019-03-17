import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
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
  const { region, handleAddressChange, handleErrorCallback, indicateProcess}= props;
  /**
   *
   * @name onLocationEventChange
   * @desc listener for change events on the map, including when
   * a user presses the map or stops dragging. Makes a call to the service
   * after the trigger
   * @param {any} coords coords containing latitude and longitude
   */
  onLocationEventChange = coords => {
    indicateProcess()
    MapActions.handleLocationChange(
      coords,
      handleAddressChange,
      handleErrorCallback
    );
  };

  return <Map region={region} handleLocationChange={onLocationEventChange} />;
};

MapContainer.propTypes = {
  region: PropTypes.object.isRequired,
  handleAddressChange: PropTypes.func.isRequired,
  handleErrorCallback: PropTypes.func.isRequired,
  indicateProcess: PropTypes.func
};

MapContainer.defaultProps = {
  handleAddressChange: r => {
    console.log(r);
  },
  handleErrorCallback: () => {}
};

export default MapContainer;
