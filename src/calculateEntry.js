const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const child = entrants.filter((entrant) => entrant.age < 18).length;
  const adult = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length;
  const senior = entrants.filter((entrant) => entrant.age >= 50).length;
  return {
    child,
    adult,
    senior,
  };
};

const calculateEntry = (entrants = []) => {
  const entries = countEntrants(entrants);
  const valorChild = entries.child * 20.99;
  const valorAdult = entries.adult * 49.99;
  const valorSenior = entries.senior * 24.99;
  const sum = valorChild + valorAdult + valorSenior;
  const finalResult = +(sum.toFixed(2));
  return entrants.length === 0 ? 0 : finalResult;
};

module.exports = { calculateEntry, countEntrants };
