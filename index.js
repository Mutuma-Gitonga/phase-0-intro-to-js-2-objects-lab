// Write your solution in this file!
const employee = {
  name: "Alex",
  streetAddress: "23rd Avenue",
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
  const newEmpl = {...obj};

  newEmpl[key] = value;

  return newEmpl;

}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;

  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  const fewerEmployees = {...employee};
  delete fewerEmployees[key];
  return fewerEmployees;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}