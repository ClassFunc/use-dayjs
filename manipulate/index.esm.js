"use strict";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);
const djsAdd = (aTime, nums, unit) => {
  return dayjs(aTime).add(nums, unit);
};
const djsSubtract = (aTime, nums, unit) => {
  return dayjs(aTime).subtract(nums, unit);
};
const djsStartOf = (aTime, unit) => {
  return dayjs(aTime).startOf(unit);
};
const djsEndOf = (aTime, unit) => {
  return dayjs(aTime).endOf(unit);
};
export {
  djsAdd,
  djsEndOf,
  djsStartOf,
  djsSubtract
};
