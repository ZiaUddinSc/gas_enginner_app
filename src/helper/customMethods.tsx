import {
  HOUR,
  GROSS_NET_VALUE,
  MATRIC_NATURAL_GAS_RATE,
  IMPERIAL_GAS_RATE,
  LPG_GROSS_NET_VALUE,
  GROSS_NET_TIME_VALUE,
  NET_TIME_VALUE,
} from './constant';
const secondsToTime = e => {
  const m = Math.floor((e % 3600) / 60)
      .toString()
      .padStart(2, '0'),
    s = Math.floor(e % 60)
      .toString()
      .padStart(2, '0');
  return m + ':' + s;
};
export const calculateGrossRate = (
  gasName = '0',
  gasType = '0',
  time = 0,
  readingDiff = 0,
) => {
  let value = 0.0;
  //Imperial=2, Natural Gas = 1,
  if (time > 0) {
    if (gasType === '1' && gasName === '1') {
      value = (HOUR * MATRIC_NATURAL_GAS_RATE) / time;
    } else {
      value = (HOUR * GROSS_NET_VALUE) / time;
    }
  }
  if (gasType === '1') {
    value = value * readingDiff;
  }
  return value.toFixed(2);
};
export const calculateGrossKW = (
  gasName = '0',
  gasType = '0',
  time = 0,
  readingDiff = 0,
) => {
  let value = 0.0;
  if (time > 0) {
    if (gasType === '1' && gasName === '1') {
      value = (HOUR * MATRIC_NATURAL_GAS_RATE * 10.76) / time;
    } else if (gasType === '2' && gasName === '1') {
      value = (HOUR * IMPERIAL_GAS_RATE) / (time * GROSS_NET_TIME_VALUE);
    } else {
      value = (HOUR * LPG_GROSS_NET_VALUE) / (time * GROSS_NET_TIME_VALUE);
    }
  }
  if (gasType === '1') {
    value = value * readingDiff;
  }
  return value.toFixed(2);
};
export const calculateGrossNet = (
  gasName = '1',
  gasType = '1',
  time = 120,
  readingDiff = 0,
) => {
  let value = 0.0;
  if (time > 0) {
    if (gasType === '1' && gasName === '1') {
      value = (HOUR * MATRIC_NATURAL_GAS_RATE * 10.76) / time / NET_TIME_VALUE;
    } else if (gasType === '2' && gasName === '1') {
      value =
        (HOUR * IMPERIAL_GAS_RATE) /
        (time * GROSS_NET_TIME_VALUE) /
        NET_TIME_VALUE;
    } else {
      value =
        (HOUR * LPG_GROSS_NET_VALUE) /
        (time * GROSS_NET_TIME_VALUE) /
        NET_TIME_VALUE;
    }
  }
  if (gasType === '1') {
    value = value * readingDiff;
  }
  return value.toFixed(2);
};
