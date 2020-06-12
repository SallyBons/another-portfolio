export const filterProjectByAttribute = (projects, dataArray, attribute) => {
  return [
    ...dataArray.reduce(
      (accumulator, currentValue) =>
        accumulator.concat(
          projects.filter((project) =>
            project[attribute].includes(currentValue)
          )
        ),
      []
    ),
  ];
};
