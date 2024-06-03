export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((student) => student.location === city)
    .map((student) => {
      const getTheGradeObj = newGrades.find((grade) => grade.studentId === student.id);
      const grade = getTheGradeObj ? getTheGradeObj.grade : 'N/A';

      return { ...student, grade };
    });
}
