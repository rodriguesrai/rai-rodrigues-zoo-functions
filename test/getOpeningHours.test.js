const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  test('Verifica se o zoológico está fechado neste horário', () => {
    expect(getOpeningHours('Friday', '9:30-PM')).toEqual('The zoo is closed');
  });

  test('Verifica se lança um erro ao colocar horário inválido', () => {
    expect(() => {
      getOpeningHours('Friday', '14-PM');
    }).toThrowError('The minutes should represent a number');
  });
  test('Verifica se lança um erro ao não colocar AM ou PM', () => {
    expect(() => {
      getOpeningHours('Friday', '10:10-GM');
    }).toThrowError('The abbreviation must be \'AM\' or \'PM\'');
  });
  test('Verifica se lança um erro ao colocar minutos inválidos', () => {
    expect(() => {
      getOpeningHours('Friday', '10:120-PM');
    }).toThrowError('The minutes must be between 0 and 59');
  });
});
