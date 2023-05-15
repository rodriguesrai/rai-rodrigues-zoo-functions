const data = require('../data/zoo_data');

const isManager = (id) => {
  const gerente = data.employees.some((employee) => (employee.managers.includes(id)
  ));

  return gerente;
};

const getRelatedEmployees = (managerId) => {
  const relatedEmployees = data.employees.filter((manager) => manager.managers.includes(managerId))
    .map((manager) => `${manager.firstName} ${manager.lastName}`);

  if (relatedEmployees.length > 0) {
    return relatedEmployees;
  }

  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};

module.exports = { isManager, getRelatedEmployees };
