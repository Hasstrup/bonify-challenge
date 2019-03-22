import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import {
  DATA_FETCHING,
  VIDEO_RESULTS_FETCHED,
  NEW_USER_CONTEXT,
  UNRESOLVED_COORDINATES_CONTEXT
} from "src/Constants";
import * as styles from "./Styles";
import VideoPreviewContext from "./Contexts/VideoPreviewContext";


/**
 *
 * @name ResultsContextView
 * @param {any} props
 * @returns ResultsContextView
 * @desc layer that handles viewing of the user's interaction with the map
 */
const ResultsContextView = props => {
  const { address, processing, handleButtonPress } = props;
  const renderContext = () => {
    const { currentUIContext } = props;
    switch (currentUIContext) {
      case VIDEO_RESULTS_FETCHED:
        return (
          <VideoPreviewContext
            address={address}
            handleButtonPress={handleButtonPress}
            processing={processing}
          />
        ); // had a bunch of options I was going to show hence the switch
      default:
        return null;
    }
  };

  return <View style={styles.resultsContextContainer}>{renderContext()}</View>;
};

ResultsContextView.propTypes = {
  address: PropTypes.string,
  currentUIContext: PropTypes.oneOf([
    DATA_FETCHING,
    VIDEO_RESULTS_FETCHED,
    NEW_USER_CONTEXT,
    UNRESOLVED_COORDINATES_CONTEXT
  ])
};

export default ResultsContextView;
