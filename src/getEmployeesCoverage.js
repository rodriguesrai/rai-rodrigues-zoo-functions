const { employees, species } = require('../data/zoo_data');

const getFullName = (employee) => `${employee.firstName} ${employee.lastName}`;

const getSpeciesNames = (responsibleFor) => responsibleFor.map((speciesId) =>
  species.find((s) => s.id === speciesId).name);

const getSpeciesLocations = (speciesNames) => speciesNames.map((speciesName) =>
  species.find((s) => s.name === speciesName).locations);

const semParam = () => {
  const employeesInfo = [];
  employees.forEach((employee) => {
    const { id, responsibleFor } = employee;
    const fullName = getFullName(employee);
    const speciesNames = getSpeciesNames(responsibleFor);
    const speciesLocations = getSpeciesLocations(speciesNames);
    employeesInfo.push({
      id,
      fullName,
      speciesNames,
      speciesLocations,
    });
  });

  return employeesInfo;
};

const getEmployeesCoverage = ({ name, id } = {}) => {
  if (name === undefined && id === undefined) {
    return semParam();
  }

  // const mudarAinda = retornaInfoName(name);
  // // Alterar essa variável
};
console.log(getEmployeesCoverage());

module.exports = getEmployeesCoverage;
