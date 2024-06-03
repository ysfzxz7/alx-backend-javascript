export default function getStudentsByLocation(list, city) {
  let location = [];
  location = list.filter((student) => student.location === city);
  return location;
}
