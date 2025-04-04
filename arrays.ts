/**
 * Checks if the given type-guarded value exists (not null and not undefined)
 * @param value value
 * @returns type predicate of given value
 * @example const filteredList = list.filter(notEmpty);
 */
export const notEmpty = <T>(value: T | null | undefined): value is T => {
  return value !== null && value !== undefined;
};

/**
 * Gets range of numbers between start (defaults to 0 if not provided) and end ints
 * @param end ending int (exclusive)
 * @param start starting int (inclusive)
 * @returns range of numbers
 * @example range(5) = [0, 1, 2, 3, 4]
 * @example range(4, 2) = [2, 3]
 */
// start: inclusive, end: exclusive
export const range = (end: number, start: number = 0): number[] =>
  [...Array(end).keys()].filter((num) => num >= start);
