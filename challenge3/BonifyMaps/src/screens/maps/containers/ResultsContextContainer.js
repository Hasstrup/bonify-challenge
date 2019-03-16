import React, { Component } from 'react'
import { View, Text } from 'react-native';
import ResultsContextView from '../components/ResultsContext/';
import {
    DATA_FETCHING,
    VIDEO_RESULTS_FETCHED,
    NEW_USER_CONTEXT,
    UNRESOLVED_COORDINATES_CONTEXT
  } from "src/Constants";


/**
 * 
 * 
 * @export
 * @class ResultsContextContainer
 * @desc container housing all the methods necessary for interacting 
 *  with the results from the user's interaction with google maps. It gives 
 * @extends {Component}
 */
export default class ResultsContextContainer extends Component {
    render() {
        // TODO: this should take the current context 
        // and a bunch of navigation options
        return (
            <ResultsContextView 
                currentUIContext={VIDEO_RESULTS_FETCHED}
            />
        )
    }
}