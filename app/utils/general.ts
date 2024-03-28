const hasInArray = (array: Array<string>, search: string) =>
  array.includes(search);

const isValidString = (val: string) =>
  val && val.trim().length && val.length > 0;

export { hasInArray, isValidString };
