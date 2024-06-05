interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
}

const Student1: Student  = {
  firstName: 'Youssef',
  lastName: 'Houmas',
  age: 27,
  location: 'Kasba tadla'
}

const Student2: Student = {
  firstName: 'Majid',
  lastName: 'Essaid',
  age: 26,
  location: 'Spain'
}

const studentsList: Student[] = [Student1, Student2];

const table = document.createElement('table');
const body = document.createElement('tbody');

studentsList.forEach(function (student: Student) {
  const tableRow = document.createElement('tr');
  tableRow.innerHTML = `
    <td>${student.firstName}</td>
    <td>${student.location}</td>
  `;
  body.appendChild(tableRow);
});

table.appendChild(body);
document.body.appendChild(table);