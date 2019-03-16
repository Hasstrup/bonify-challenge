import React from "react";
import { Navigation } from "react-native-navigation";

export const withNavigatorProp = Component => {
  return props => {
    const navigator = setNavigatorProp(props.componentId);
    const mergedProps = { ...props, navigator };
    return <Component {...mergedProps} />;
  };
};

const setNavigatorProp = componentId => {
  const navigator = {};
  const PUSH_ACTION = "push";
  const POP_ACTION = "pop";
  navigator[PUSH_ACTION] = screenOpts =>
    Navigation.push(componentId, screenOpts);
  navigator[POP_ACTION] = () => Navigation.pop(componentId);
  return navigator;
};
