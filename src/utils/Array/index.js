/**
 * Function to check if array is an empty.
 *
 * @param {String} value
 * @returns {Boolean}
 */
export const isArrayEmpty = (value) => {
  return !Array.isArray(value) || !value.length;
};
