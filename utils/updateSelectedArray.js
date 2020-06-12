export const updateSelectedArray = (array, value) => {
  array.includes(value)
    ? (array = array.filter((el) => el !== value))
    : array.push(value);
  return array;
};
