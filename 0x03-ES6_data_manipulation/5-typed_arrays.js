export default function createInt8TypedArray(length, pos, value) {
  const arr = new ArrayBuffer(length);
  const view = new DataView(arr);
  if (pos < 0 || pos >= length) throw new Error('Position outside range');
  view.setInt8(pos, value);
  return view;
}
