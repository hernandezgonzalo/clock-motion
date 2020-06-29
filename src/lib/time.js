import { getSeconds, getMinutes, getHours } from "date-fns";

const getHoursDecimals = date => Math.trunc(getHours(date) / 10);
const getHoursUnits = date => getHours(date) % 10;
const getMinutesDecimals = date => Math.trunc(getMinutes(date) / 10);
const getMinutesUnits = date => getMinutes(date) % 10;
const getSecondsDecimals = date => Math.trunc(getSeconds(date) / 10);
const getSecondsUnits = date => getSeconds(date) % 10;

export const getTime = () => {
  const date = new Date();

  return {
    hoursDecimals: getHoursDecimals(date),
    hoursUnits: getHoursUnits(date),
    minutesDecimals: getMinutesDecimals(date),
    minutesUnits: getMinutesUnits(date),
    secondsDecimals: getSecondsDecimals(date),
    secondsUnits: getSecondsUnits(date)
  };
};
