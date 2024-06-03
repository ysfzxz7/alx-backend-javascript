export default function cleanSet(set, s) {
  if (!s || s.length === 0 || !set || typeof s !== 'string' || !(set instanceof Set)) return '';
  const arr = [];
  for (const i of set.values()) {
    if (typeof i === 'string' && i.startsWith(s)) arr.push(i.slice(s.length));
  }
  return arr.join('-');
}
