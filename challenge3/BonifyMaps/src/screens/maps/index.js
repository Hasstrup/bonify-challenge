import React, { Component } from "react";
import { View } from "react-native";
import { setNavigatorProp } from "src/navigation/actions";
import { MapContainer, ResultsContextContainer } from "src/screens/maps/containers";

/**
 *
 *
 * @class MapsIndexView
 * @extends {Component}
 * @desc renders the map from which users can select videos on the map
 *
 */
export class MapsIndexScreen extends Component {
  
  constructor(props) {
    super(props);
    const { componentId } = this.props;
    this.navigator = setNavigatorProp(componentId);
  }
  
  /**
   * 
   * 
   * @static
   * @param {any} passProps 
   * @returns {object} the navigation options for the class
   * @desc set of navigation options that determine the layout of the code
   * @memberOf MapsIndexScreen
   */
  static options () {
    return {
      topBar: {
        visible: false,
        drawBehind: true
      }
    };
  }

  render() {
    return (
      <View style={{ flex: 1, position: 'relative' }}>
        <MapContainer />
        <ResultsContextContainer />
      </View>
    );
  }
}
