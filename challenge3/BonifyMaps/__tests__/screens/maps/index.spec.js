import "react-native";
import React from "react";
import { shallow, mount } from "enzyme";
import { stub } from "sinon";
import { MapsIndexScreen } from "src/screens/registry";
import * as MapActions from "src/Actions/";

import {
  MapContainer,
  SearchContainer,
  ResultsContextContainer
} from "src/screens/maps/containers/";

const userLocationStub = stub(MapActions, "fetchUsersCurrentLocation");

describe("Maps Index screen", () => {
  describe("Layout", () => {
    it("renders correctly and matches snapshot", () => {
      const wrapper = shallow(<MapsIndexScreen />);
      expect(wrapper).toMatchSnapshot();
      wrapper.setProps({ componentId: "testComponentId" });
      expect(wrapper).toMatchSnapshot();
    });

    it("contains the MapContainer", () => {
      const wrapper = shallow(<MapsIndexScreen />);
      expect(wrapper.find(MapContainer)).toExist();
    });

    it("contains the ResultsContextContainer", () => {
      const wrapper = shallow(<MapsIndexScreen />);
      expect(wrapper.find(ResultsContextContainer)).toExist();
    });

    it("contains the SearchContextContainer", () => {
      const wrapper = shallow(<MapsIndexScreen />);
      expect(wrapper.find(SearchContainer)).toExist();
    });
  });

  describe("Behaviour", () => {
    beforeEach(() => {
      //stub the function
      userLocationStub.returns({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      });
    });

    afterAll(() => {
      userLocationStub.restore();
    });

    it("mounts", () => {
      const wrapper = mount(<MapsIndexScreen />);
      expect(wrapper.find("TextInput")).toExist();
      expect(wrapper.find("TouchableOpacity")).toExist();
    });

    it("fetches the users location on initial mount", () => {
      const wrapper = shallow(<MapsIndexScreen />);
      expect(
        wrapper.findWhere(node => node.prop("location") === "37.78825,-122.4324")
      ).toExist();
    });
  });
});
