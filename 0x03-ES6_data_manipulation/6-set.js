export default function setFromArray(arr) {
  return !arr ? new Set() : new Set(arr);
}
