import React from "react";
import { View, Text } from "react-native";
import {
  DATA_FETCHING,
  VIDEO_RESULTS_FETCHED,
  NEW_USER_CONTEXT,
  UNRESOLVED_COORDINATES_CONTEXT
} from "src/constants";
import VideoPreviewContext from './Contexts/VideoPreviewContext'
import NewUserContext from './Contexts/NewUserContext';
import UnresolvedCoordsContext from './Contexts/UnresolvedCoordsContext';


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
        return null
    }
  };

  return <View>{renderContext()}</View>;
};
