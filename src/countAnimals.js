const data = require('../data/zoo_data');

const allAnimals = () => {
  const todosAnimais = {};

  data.species.forEach((elemento) => {
    todosAnimais[elemento.name] = elemento.residents.length;
  });

  return todosAnimais;
};

const countAnimals = (animal) => {
  if (animal === undefined) {
    const todosAnimaisFinal = allAnimals();
    return todosAnimaisFinal;
  }
  const { species, sex } = animal;
  const searchSpecies = data.species.find((elemento) => elemento.name === species);
  const quantidadeAnimais = sex !== undefined
    ? searchSpecies.residents.filter((residente) => residente.sex === sex).length
    : searchSpecies.residents.length;
  return quantidadeAnimais;
};
console.log(countAnimals({ species: 'giraffes', sex: 'female' }));
module.exports = countAnimals;
