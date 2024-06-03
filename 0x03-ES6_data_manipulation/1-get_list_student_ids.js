export default function getListStudentIds(list) {
  const ids = [];
  if (!(Array.isArray(list))) return ids;
  list.map((ele) => ids.push(ele.id));
  return ids;
}
