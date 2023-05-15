const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (animal === undefined) {
    const todosAnimais = {};

    data.species.forEach((elemento) => {
      todosAnimais[elemento.name] = elemento.residents.length;
    });

    return todosAnimais;
  } else {
    
  }
};
console.log(countAnimals());
module.exports = countAnimals;
