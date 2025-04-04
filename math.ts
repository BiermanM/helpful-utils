/**
 * Gets value between given range corresponding to given percentage
 * @param percentage percentage (between 0 and 1)
 * @param range start and end numbers of range
 * @returns value
 * @example getValueInRangeFromPercentage(0.6, [0, 100]) = 60
 * @example getValueInRangeFromPercentage(0.333, [5, 10]) = 6.665
 */
export const getValueInRangeFromPercentage = (
  percentage: number,
  [start, end]: [number, number]
): number => {
  return percentage * (end - start) + start;
};

/**
 * Gets percentage of given range corresponding to given value
 * @param value value within range
 * @param range start and end numbers of range
 * @returns percentage
 * @example getPercentageInRangeFromValue(5, [0, 10]) = 0.5
 * @example getPercentageInRangeFromValue(15, [10, 25]) = 0.33333333
 */
export const getPercentageInRangeFromValue = (
  value: number,
  [start, end]: [number, number]
): number => {
  return (value - start) / (end - start);
};

/**
 * Clamps given value to within the given range
 * @param value value to clamp
 * @param range start and end numbers of range
 * @returns clamped number
 * @example clampToRange(10, [0.1, 9.999]) = 9.999
 * @example clampToRange(4, [1, 5]) = 4
 */
export const clampToRange = (
  value: number,
  [start, end]: [number, number]
): number => {
  return Math.max(start, Math.min(value, end));
};

/**
 * Rounds given value by number of given decimal places
 * @param value value to round
 * @param numPlaces number of decimal places
 * @returns rounded value
 * @example roundToDecimalPlace(3.33333333, 3) = 3.333
 * @example roundToDecimalPlace(1.99999, 3) = 2
 */
export const roundToDecimalPlace = (
  value: number,
  numPlaces: number
): number => {
  return (
    Math.round((value + Number.EPSILON) * Math.pow(10, numPlaces)) /
    Math.pow(10, numPlaces)
  );
};

/**
 * Gets sum of given numbers
 * @param values list of numbers
 * @returns sum of numbers
 * @example sum([1, 2, 3]) = 6
 */
export const sum = (values: number[]): number => {
  return values.reduce((currentValue, total) => currentValue + total, 0);
};

/**
 * Formats given amount to US dollars
 * @param amount number to format
 * @param displayAsInt display money without decimals?
 * @returns money as string
 * @example formatMoney(3.456) = $3.46
 * @example formatMoney(1.99999) = $2
 */
export const formatMoney = (amount: number, displayAsInt?: boolean): string => {
  return new Intl.NumberFormat("en-US", {
    currency: "USD",
    style: "currency",
    ...(displayAsInt
      ? {
          maximumFractionDigits: 0,
          minimumFractionDigits: 0,
        }
      : {}),
  }).format(Number(amount));
};
