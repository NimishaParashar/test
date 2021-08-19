export const isEmpty = (value) => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0)
  );
};

export const sliceString = (str, startIndex, endIndex) => {
  return str.slice(startIndex, endIndex);
};

export const splitString = (str, direction) => {
  let splittedString = str.split("-");
  if (direction === "start") {
    return splittedString[0];
  } else if (direction === "end") {
    return splittedString[splittedString.length - 1];
  }
};
