import 'react-native';
import React from 'react';
import { shallow } from 'enzyme'
import { MapsIndexScreen } from 'src/screens/registry'
import { MapContainer } from 'src/screens/maps/containers/'


describe('Maps Index screen', () => {
    it('renders correctly and matches snapshot', () => {
        const wrapper = shallow(<MapsIndexScreen />)
        expect(wrapper).toMatchSnapshot()
        wrapper.setProps({ componentId: "testComponentId" })
        expect(wrapper).toMatchSnapshot()
    })

    it('contains the MapContainer', () => {
        const wrapper = shallow(<MapsIndexScreen />);
        expect(wrapper.find(MapContainer)).toExist()
    })

})