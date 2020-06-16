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
