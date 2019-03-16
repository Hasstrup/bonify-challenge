import React from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import styles from './Styles/map';

export default props => {
  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }}
    />
  );
};


