import React from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import PropTypes from "prop-types";
import styles from "./Styles/map";
import customMapStyle from "./Styles/CustomMapStyle.json";


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
