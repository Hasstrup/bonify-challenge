import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import defaultStyles from './styles';


/**
 * 
 * @name ProcessIndicator
 * @param {any} props 
 * @desc shows that a process is happening in the background
 * @returns {func} The ProcessIndicatorComponent 
 */
export const ProcessIndicator = ({ indicatorSize }) => (
    <View style={defaultStyles.processIndicatorStyle}>
        <Text style={defaultStyles.indicatorTextStyle}>Loading</Text>
    </View>
)

ProcessIndicator.PropTypes = {
    indicatorSize: PropTypes.number
}

ProcessIndicator.defaultProps = {
    indicatorSize: 14
}