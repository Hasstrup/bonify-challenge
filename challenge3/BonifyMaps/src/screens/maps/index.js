import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { setNavigatorProp } from "src/navigation/actions";
import * as MapActions from "src/Actions";
import {
  MapContainer,
  ResultsContextContainer,
  SearchContainer
} from "src/screens/maps/containers";

export const MapsIndexScreen = props => {
  const navigator = setNavigatorProp(props.componentId);
  const [region, setRegion] = useState({});
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    MapActions.getUsersLocation(setRegion);
  }, []);

  const handleAddressChange = ({ region: newRegion, latLng, address }) => {
    console.log(address)
    setRegion(newRegion);
  };

  return (
    <View style={{ flex: 1, position: "relative" }}>
      <MapContainer
        region={region}
        indicateProcess={() => setProcessing(true)}
        handleAddressChange={handleAddressChange}
      />
      <ResultsContextContainer processing={processing} navigator={navigator} />
      <SearchContainer />
    </View>
  );
};

/**
 *
 *
 * @static
 * @param {any} passProps
 * @returns {object} the navigation options for the class
 * @desc set of navigation options that determine the layout of the code
 * @memberOf MapsIndexScreen
 */
MapsIndexScreen.options = () => ({
  topBar: {
    visible: false,
    drawBehind: true
  }
});
