import { Navigation } from "react-native-navigation";

 /**
 * 
 * @name setNavigatorProp
 * @desc takes in a component Id and returns a navigating object
 * @param {any} componentId 
 * @returns 
 */
export const setNavigatorProp = componentId => {
  const navigator = {};
  const PUSH_ACTION = "push";
  const POP_ACTION = "pop";
  navigator[PUSH_ACTION] = screenOpts =>
    Navigation.push(componentId, screenOpts);
  navigator[POP_ACTION] = () => Navigation.pop(componentId);
  return navigator;
};


export /**
 * 
 * @name setNavigationOptions
 * @desc sets navigation options for non root screens
 * @param {any} componentId 
 * @param {any} [navigationOpts={}] 
 */
const setNavigationOptions = (componentId, navigationOpts = {}) => {
  Navigation.mergeOptions(componentId, navigationOpts)
}