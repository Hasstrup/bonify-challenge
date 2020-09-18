import "react-native";
import "jest-enzyme";
import { JSDOM } from "jsdom";

const { document } = new JSDOM(``, {
  url: "https://example.com" // or whatever
}).window;

global.document = document;
global.window = document.defaultView;
global.navigator = {
  userAgent: "node.js",
  geolocation: {
      getCurrentPosition: () => {}
  }
};

Object.keys(document.defaultView).forEach(property => {
  if (typeof global[property] === "undefined") {
    global[property] = document.defaultView[property];
  }
});

const originalConsoleError = console.error;
console.error = message => {
  if (message.startsWith("Warning:")) {
    return;
  }

  originalConsoleError(message);
};
