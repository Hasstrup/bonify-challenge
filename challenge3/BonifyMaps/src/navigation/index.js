import { Navigation } from "react-native-navigation";
import * as ApplicationScreens from "../screens/registry";

/**
 * @name registerScreens
 * @desc registers all the screens per the specification in the
 * RNN docs
 * @returns {null}
 */
const registerScreens = () => {
  Object.keys(ApplicationScreens).forEach(key => {
    Navigation.registerComponent(key, () => ApplicationScreens[key]);
  });
};

/**
 * @name navigationStackFromScreens
 * @desc takes all the screens from the registry
 * and yields the navigation stack for the application
 * @returns {object}
 */
const navigationStackFromScreens = (screens, defaultOptions = {}) => {
  return Object.keys(screens).reduce((iterator, componentName) => {
    // We could add other properties for the screens here
    const component = { name: componentName };
    const { children } = iterator;
    iterator.children = [{ component }, ...(children || [])];
    return iterator;
  }, {});
};

/**
 * @name initializeApplication
 * @desc this function registers all the screens in the registry
 * and then wires up the navigation
 * @returns {null}
 */
export const initializeApplication = () => {
  registerScreens();
  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        stack: { ...navigationStackFromScreens(ApplicationScreens) }
      }
    });
  });
};
