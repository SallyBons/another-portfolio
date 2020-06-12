export const getAllCategories = (dataArray, category) => {
  let keys = [];
  dataArray.forEach((element) => {
    keys.push(...Object.values(element[category]));
  });
  return new Set(keys);
};
