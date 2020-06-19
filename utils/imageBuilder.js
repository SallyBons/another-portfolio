import { ICON_URL } from "../constants";

export const imageBuilder = (dataArray, iconsObject) => {
  let urlsArray = [];
  dataArray.forEach((element) => {
    for (const key in iconsObject) {
      if (iconsObject.hasOwnProperty(key)) {
        const icon = iconsObject[key];
        if (key === element && icon !== "") {
          const objectsValues = { name: key, url: ICON_URL + icon };
          urlsArray.push(objectsValues);
        }
      }
    }
  });
  return urlsArray;
};
