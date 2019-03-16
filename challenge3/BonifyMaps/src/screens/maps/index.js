import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { withNavigatorProp } from 'src/navigation/actions';


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
        <TouchableOpacity style={{ height: 100, width: 100 }} onPress={this.handleNavigation}> 
          <Text>Hello from Maps Index Screen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


export const MapsIndexScreen = withNavigatorProp(MapsIndexView);