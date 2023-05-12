const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => (ids.length === 0
  ? [] : data.species.filter((species) => ids.includes(species.id)));

module.exports = getSpeciesByIds;
