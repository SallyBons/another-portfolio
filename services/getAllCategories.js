export const getAllCategories = (dataArray, category) => {
  let keys = [];
  dataArray.forEach((element) => {
    keys.push(...Object.values(element[category]));
  });
  return new Set(keys);
};

// export const getAllCategories = (dataArray, category) => {
//   return new Set(
//     dataArray.reduce((accumulator, currentValue) => {
//       accumulator.push(...Object.values(currentValue[category]));
//       return accumulator;
//     }, [])
//   );
// };
