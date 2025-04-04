/**
 * Gets difference in given unit between two given dates (order of the dates don't matter)
 * @param date1 first date
 * @param date2 second date
 * @param unit unit of time difference
 * @returns time difference (float number)
 */
export const getTimeDifference = (
  date1: Date,
  date2: Date,
  unit: "days" | "hours" | "minutes" | "seconds"
): number => {
  const differenceInSeconds =
    Math.abs(date1.getTime() - date2.getTime()) / 1000;

  if (unit === "seconds") {
    return differenceInSeconds;
  }

  if (unit === "minutes") {
    return differenceInSeconds / 60;
  }

  if (unit === "hours") {
    return differenceInSeconds / (60 * 60);
  }

  if (unit === "days") {
    return differenceInSeconds / (60 * 60 * 24);
  }

  throw new Error(`getTimeDifference: invalid unit (${unit})`);
};
