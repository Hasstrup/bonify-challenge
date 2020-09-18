
// mock react-native-maps
jest.mock("react-native-maps", () => {
  var React = require("react");
  const { TouchableOpacity, StyleSheet } = require('react-native')

  const mockCoordinates = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  };

  const MockMap = props => {
    const onPress = e => {
      e.nativeEvent.coordinate = mockCoordinates;
      props.onPress();
    };
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{ ...StyleSheet.absoluteFillObject }}
      />
    );
  };
  return MockMap;
});
