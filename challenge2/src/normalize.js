
/**
 *
 * @name normalize
 * @desctiption Takes in some input and a normalizing key, uses the key
 * as the basis for flattening the object,
 * @returns {object} the flattened object
 * @param {any} input
 * @param {any} key
 * @returns
 */
export const normalize = (input, key) => {
  validateInput(input);
  return Object.keys(input).reduce((resultingObject, currentKey) => {
    resultingObject[currentKey] = normalizeValuesFromInput(
      input[currentKey],
      key
    );
    return resultingObject;
  }, {});
};

/**
 * @desc makes sure the input provided is a valid object with keys
 * @name validateInput
 * @param {any} input
 */
export const validateInput = input => {
  if (typeof input !== "object" || !Object.values(input).length) {
    throw new Error(
      "Please provide a valid input, should be an object with some input"
    );
  }
};

/**
 * @name normalizeValuesFromInput
 * @description takes an object and key then recursively check for that key
 * within the object's context. returns null if it doesnt find any
 * @param {any} args
 * @param {any} key
 * @returns
 */
export const normalizeValuesFromInput = (args, key) => {
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
