/**
 * Function to check if string is empty.
 *
 * @param {String} value
 * @returns {Boolean}
 */
export const isStringEmpty = (value) => {
  if (typeof value === "string") {
    return !value.length || !value.trim();
  }

  return true;
};
