export const distanceConverter = (distance) => {
  const fixedMeter = distance * 1000;
  return Number.parseFloat(fixedMeter).toFixed(0);
};
