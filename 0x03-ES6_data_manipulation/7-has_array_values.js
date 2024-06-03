export default function hasValuesFromArray(set, arr) {
  if (arr) {
    for (const i of arr) {
      if (!(set.has(i))) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
}
