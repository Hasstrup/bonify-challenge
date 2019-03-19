import React from "react";
import PropTypes from "prop-types";
import ResultsContextView from "../components/ResultsContext/";
import {
  VIDEO_RESULTS_FETCHED,
  NEW_USER_CONTEXT,
  UNRESOLVED_COORDINATES_CONTEXT
} from "src/Constants";

/**
 *
 * @export
 * @name ResultsContextContainer
 * @desc container housing all the methods necessary for interacting
 *  with the results from the user's interaction with google maps.
 *
 */
const ResultsContextContainer = props => {
  /**
   * @name handleNavigation
   * @desc handles routing from the maps index page
   * to the videos index page passing the latLng, so the
   * next screen can find the
   * @returns {null}
   */
  const handleNavigation = () => {
    props.navigator.push({
      component: {
        name: "VideosIndexScreen",
        passProps: {
          location: props.location
        }
      }
    });
  };

  return (
    <ResultsContextView
      currentUIContext={VIDEO_RESULTS_FETCHED}
      address={props.address}
      processing={props.processing}
      handleButtonPress={handleNavigation}
    />
  );
};

ResultsContextContainer.propTypes = {
  address: PropTypes.string
};
export default ResultsContextContainer;
