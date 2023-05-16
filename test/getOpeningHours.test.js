const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  test('Verifica se o zoológico está fechado neste horário', () => {
    expect(getOpeningHours('Friday', '9:30-PM')).toEqual('The zoo is closed');
  });
  test('Verifica se o zoológico está aberto neste horário', () => {
    expect(getOpeningHours('Tuesday', '9:00-AM')).toEqual('The zoo is open');
  });
  test('Verifica se ao não receber parâmetro retorna o esperado', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
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
  test('Verifica se lança um erro ao colocar hora inválida', () => {
    expect(() => {
      getOpeningHours('Friday', '15:12-PM');
    }).toThrowError('The hour must be between 0 and 12');
  });
});
