// Initial employee array
let employees = [
  { id: 1, name: "John", age: "18", profession: "developer" },
  { id: 2, name: "Jack", age: "20", profession: "developer" },
  { id: 3, name: "Karen", age: "19", profession: "admin" }
];

// 1. Print Developers using map
function PrintDeveloperbyMap() {
  employees.map((employee) => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

// 2. Print Developers using forEach
function PrintDeveloperbyForEach() {
  employees.forEach((employee) => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

// 3. Add a new employee
function addData() {
  const newEmployee = { id: 4, name: "Susan", age: "20", profession: "intern" };
  employees.push(newEmployee);
  console.log(employees);
}

// 4. Remove all admins
function removeAdmin() {
  employees = employees.filter((employee) => employee.profession !== "admin");
  console.log(employees);
}

// 5. Concatenate another array
function concatenateArray() {
  const newEmployees = [
    { id: 5, name: "Mike", age: "22", profession: "designer" },
    { id: 6, name: "Emma", age: "21", profession: "developer" },
    { id: 7, name: "Chris", age: "25", profession: "manager" }
  ];
  const allEmployees = employees.concat(newEmployees);
  console.log(allEmployees);
}
