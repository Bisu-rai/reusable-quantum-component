import { isArrayEmpty } from "./Array";
import { isObjectEmpty } from "./Object";
import { isStringEmpty } from "./String";

/**
 * Function to check if passed value is empty.
 *
 * @param {Any} Value
 * @returns {Boolean}
 */
export const isEmpty = (value) => {
  const dataType = typeof value;
  if (Array.isArray(value)) return isArrayEmpty(value);

  if (typeof dataType === "object") {
    return isObjectEmpty(value);
  }

  if (dataType === "string") {
    return isStringEmpty(value);
  }

  return true;
};
