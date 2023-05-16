const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const dadosColaborador = data.employees.find((elemento) => elemento.id === id);
  const animalColaborador = dadosColaborador.responsibleFor[0];
  const especieAnimal = data.species.find((elemento) => elemento.id === animalColaborador);
  const animaisDaEspecie = especieAnimal.residents;
  const animalMaisAntigo = animaisDaEspecie.reduce(
    (maisAntigo, animal) =>
      (animal.age > maisAntigo.age ? animal : maisAntigo),
  );

  return [animalMaisAntigo.name, animalMaisAntigo.sex, animalMaisAntigo.age];
};

module.exports = getOldestFromFirstSpecies;
