import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { setNavigatorProp } from "src/navigation/actions";
import * as MapActions from "src/Actions";
import {
  MapContainer,
  ResultsContextContainer,
  SearchContainer
} from "src/screens/maps/containers";

/**
 * 
 * @name MapsIndexScreen
 * @desc Component rendered for on the index screen.
 * @param {any} props 
 * @returns {func} React Component 
 */
export const MapsIndexScreen = props => {
  const navigator = setNavigatorProp(props.componentId);

  const initialState = {
    region: {},
    address: "Fetching your location ...",
    latLng: "",
    processing: false,
    errors: false,
  };

  const [state, setState] = useState(initialState);

  useEffect(() => {
    MapActions.getUsersLocation(region => {
      setState({ ...state, region });
    });
  }, []);

  const handleAddressChange = ({ region, latLng, address }) => {
    setState({
      ...state,
      region,
      latLng,
      address,
      processing: false,
      errors: false
    });
  };

  return (
    <View style={{ flex: 1, position: "relative" }}>
      <MapContainer
        region={state.region}
        indicateProcess={() => setState({ ...state, processing: true })}
        handleAddressChange={handleAddressChange}
        handleErrorCallback={(err) => setState({ ...state, errors: true, address: err.message })}
      />
      <ResultsContextContainer
        processing={state.processing}
        errors={state.errors}
        navigator={navigator}
        address={state.address}
      />
      <SearchContainer 
        handleAddressChange={handleAddressChange}
        handleErrorCallback={(err) => setState({ ...state, errors: true, address: err.message })}
      />
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
