const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (employeeName === undefined) {
    return {};
  }
  const infoEmployee = data.employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
  return infoEmployee;
};

console.log(getEmployeeByName('Burl'));
module.exports = getEmployeeByName;
