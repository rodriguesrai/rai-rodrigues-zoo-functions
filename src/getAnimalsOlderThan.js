const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const especies = data.species.find((species) => species.name === animal);
  if (especies === undefined) {
    return false;
  }

  return especies.residents.every((resident) => resident.age >= age);
};

module.exports = getAnimalsOlderThan;
