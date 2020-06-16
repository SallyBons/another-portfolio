export const findAllKeys = (dataArray) => {
  let keys = [];
  dataArray.forEach((element) => {
    keys.push(...Object.keys(element)); // get unique set of data keys for search
  });
  return new Set(keys);
};
