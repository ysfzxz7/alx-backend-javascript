export default function cleanSet(set, s) {
  if (!s) return '';
  const arr = [];
  for (const i of set) {
    if (i.startsWith(s)) arr.push(i.slice(s.length));
  }
  return arr.join('-');
}
