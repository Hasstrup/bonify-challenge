import data from './data'

const normalize = (input, key) => {
  validateInput(input);
  return Object.keys(input).reduce((resultingObject, currentKey) => {
    resultingObject[currentKey] = normalizeValuesFromInput(input[currentKey], key);
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

const normalizeValuesFromInput = (args, key) => {
  if (args.constructor !== Object) return null;
  const target = args[key];
  const processArrayValue = () =>
    target.map(node =>
      Object.keys(node).reduce((result, currentKey) => {
        result[currentKey] = normalizeValuesFromInput(node[currentKey], key);
        return result;
      }, {})
    );
  return Array.isArray(target) ? processArrayValue() : target;
};

const NORMALIZING_KEY = "value";

console.log(normalize(data.source, NORMALIZING_KEY));
