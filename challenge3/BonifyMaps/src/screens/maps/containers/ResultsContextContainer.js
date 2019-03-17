import React from 'react';
import PropTypes from 'prop-types';
import ResultsContextView from '../components/ResultsContext/';
import {
    DATA_FETCHING,
    VIDEO_RESULTS_FETCHED,
    NEW_USER_CONTEXT,
    UNRESOLVED_COORDINATES_CONTEXT
  } from "src/Constants";



/**
 *  
 * @export
 * @name ResultsContextContainer
 * @desc container housing all the methods necessary for interacting 
 *  with the results from the user's interaction with google maps. It gives 
 * 
 */
const ResultsContextContainer = (props) => {
    return (
        <ResultsContextView 
            currentUIContext={VIDEO_RESULTS_FETCHED}
            address={props.address}
        />
    )
}


ResultsContextContainer.propTypes = {
    address: PropTypes.string
}
export default ResultsContextContainer