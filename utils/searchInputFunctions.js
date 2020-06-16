export const cardHasKeyword = (dataArray, keyword, project) => {
  return [...dataArray].some((fieldToSearch) => {
    return Array.isArray(project[fieldToSearch])
      ? project[fieldToSearch].some(
          (el) => el.toLowerCase().indexOf(keyword.toLowerCase()) !== -1 //get all coincidences with search phrase
        )
      : project[fieldToSearch].toLowerCase().indexOf(keyword.toLowerCase()) !==
          -1;
  });
};

export const findAllKeys = (dataArray) => {
  let keys = [];
  dataArray.forEach((element) => {
    keys.push(...Object.keys(element)); // get unique set of data keys for search
  });
  return new Set(keys);
};
