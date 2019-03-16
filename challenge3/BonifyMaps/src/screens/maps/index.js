import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { withNavigatorProp } from 'src/navigation/actions';
import { MapContainer } from  'src/screens/maps/containers';


/**
 * 
 * 
 * @class MapsIndexView
 * @extends {Component}
 * @desc renders the map from which users can select videos on the map
 * 
 */
class MapsIndexView extends Component {
 
  handleNavigation = () => {
    this.props.navigator.push({ component: { name: 'VideosIndexScreen' } })
  }
  render() {
    return (
      <View style={{ flex: 1, paddingTop: 50 }}>
        <MapContainer />
      </View>
    );
  }
}


export const MapsIndexScreen = withNavigatorProp(MapsIndexView);