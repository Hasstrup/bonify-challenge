const data = require("./data.js");

const normalize = (input, key) => {
  validateInput(input);
  return Object.keys(input).reduce((resultingObject, currentKey) => {
    resultingObject[currentKey] = normalizeKeyFromInput(input[currentKey], key);
    return resultingObject;
  }, {});
};

const validateInput = input => {
  if (typeof input !== "object" || !Object.values(input).length) {
    throw new Error(
      "Please provide a valid input, should be an object with some input"
    );
  }
};

const normalizeKeyFromInput = (args, key) => {
  if (args.constructor !== Object) return null;
  const target = args[key];
  const processArrayValue = () => {
    return target.map(node => {
      return Object.keys(node).reduce((result, currentKey) => {
        result[currentKey] = normalizeKeyFromInput(node[currentKey], key);
        return result;
      }, {});
    });
  };
  return Array.isArray(target) ? processArrayValue() : target;
};

const KEY = "value";

console.log(normalize(data.source, KEY));
