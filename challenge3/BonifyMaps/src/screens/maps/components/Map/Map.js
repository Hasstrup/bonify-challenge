import React from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import PropTypes from 'prop-types';
import styles from './Styles/map';
import customMapStyle from './Styles/CustomMapStyle.json'
const Map = props => {
  const { 
    usersRegion,
    region
  } = props;

 
  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      customMapStyle={customMapStyle}
      initialRegion={usersRegion}
      region={region || usersRegion}
      showsUserLocation
    />
  );
};

Map.propTypes = {
  region: PropTypes.object,
  initialRegion: PropTypes.object
}

export default Map


