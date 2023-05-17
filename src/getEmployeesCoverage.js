const { employees, species } = require('../data/zoo_data');

const getFullName = (employee) => `${employee.firstName} ${employee.lastName}`;

const getSpeciesNames = (responsibleFor) => responsibleFor.map((speciesId) =>
  species.find((s) => s.id === speciesId).name);

const getSpeciesLocations = (speciesNames, speciesData) => speciesNames.map((speciesName) =>
  species.find((s) => s.name === speciesName).location);

const getEmployeeByName = (name) => {
  const employee = employees.find((e) => e.firstName === name || e.lastName === name);
  if (!employee) {
    throw new Error('Informações inválidas');
  }
  const { id, responsibleFor } = employee;
  const fullName = getFullName(employee);
  const speciesNames = getSpeciesNames(responsibleFor);
  const speciesLocations = getSpeciesLocations(speciesNames);
  return {
    id,
    fullName,
    species: speciesNames,
    locations: speciesLocations,
  };
};

const getEmployeeById = (id) => {
  const employee = employees.find((e) => e.id === id);
  if (!employee) {
    throw new Error('Informações inválidas');
  }
  const { responsibleFor } = employee;
  const fullName = getFullName(employee);
  const speciesNames = getSpeciesNames(responsibleFor);
  const speciesLocations = getSpeciesLocations(speciesNames);
  return {
    id,
    fullName,
    species: speciesNames,
    locations: speciesLocations,
  };
};

const getAllEmployees = () => {
  const employeesInfo = employees.map((employee) => {
    const { id, responsibleFor } = employee;
    const fullName = getFullName(employee);
    const speciesNames = getSpeciesNames(responsibleFor);
    const speciesLocations = getSpeciesLocations(speciesNames);
    return {
      id,
      fullName,
      species: speciesNames,
      locations: speciesLocations,
    };
  });

  return employeesInfo;
};

const getEmployeesCoverage = ({ name, id } = {}) => {
  if (name) {
    return getEmployeeByName(name);
  }

  if (id) {
    return getEmployeeById(id);
  }

  return getAllEmployees();
};

module.exports = getEmployeesCoverage;
