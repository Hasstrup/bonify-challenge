import React from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import PropTypes from "prop-types";
import styles from "./Styles/map";
import customMapStyle from "./Styles/CustomMapStyle.json";


/**
 * 
 * @name Map
 * @desc Map Component houses the MapView from react-native-maps
 * @param {any} props takes in handleLocationChange - to be called after every interaction with the maps
 * @returns {function} the Map component
 */
const Map = props => {
  const { region, handleLocationChange } = props;
  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      customMapStyle={customMapStyle}
      initialRegion={region}
      region={region}
      showsUserLocation
      onPress={(e) => handleLocationChange(e.nativeEvent.coordinate)}
      onRegionChangeComplete={handleLocationChange}
    />
  );
};

Map.propTypes = {
  region: PropTypes.object,
  handleLocationChange: PropTypes.func.isRequired
};

export default Map;
