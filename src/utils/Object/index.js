/**
 * Function to check if object is an empty.
 *
 * @param {String} value
 * @returns {Boolean}
 */
export const isObjectEmpty = (value) => {
  return (
    !value ||
    (Object.entries(value).length === 0 && value.constructor === Object)
  );
};
