import "react-native";
import React from "react";
import { shallow, mount } from "enzyme";
import { MapsIndexScreen } from "src/screens/registry";
import {
  MapContainer,
  SearchContainer,
  ResultsContextContainer
} from "src/screens/maps/containers/";

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
    it("mounts", () => {
      const wrapper = mount(<MapsIndexScreen />);
      expect(wrapper.find('TextInput')).toExist();
    });
  });
});
