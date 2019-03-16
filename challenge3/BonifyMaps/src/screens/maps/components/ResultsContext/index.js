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
import { ProcessIndicator } from "src/SharedComponents";
import VideoPreviewContext from "./Contexts/VideoPreviewContext";
import NewUserContext from "./Contexts/NewUserContext";
import UnresolvedCoordsContext from "./Contexts/UnresolvedCoordsContext";

/**
 *
 * @name ResultsContextView
 * @param {any} props
 * @returns ResultsContextView
 * @desc layer that handles viewing of the user's interaction with the map
 */
const ResultsContextView = props => {
  const renderContext = () => {
    const { currentUIContext } = props;
    switch (currentUIContext) {
      case DATA_FETCHING:
        return <ProcessIndicator />;
      case VIDEO_RESULTS_FETCHED:
        return <VideoPreviewContext />;
      case NEW_USER_CONTEXT:
        return <NewUserContext />;
      case UNRESOLVED_COORDINATES_CONTEXT:
        return <UnresolvedCoordsContext />;
      default:
        return null;
    }
  };

  return <View style={styles.resultsContextContainer}>{renderContext()}</View>;
};

ResultsContextView.propTypes = {
  currentUIContext: PropTypes.oneOf([
    DATA_FETCHING,
    VIDEO_RESULTS_FETCHED,
    NEW_USER_CONTEXT,
    UNRESOLVED_COORDINATES_CONTEXT
  ])
};

export default ResultsContextView;
