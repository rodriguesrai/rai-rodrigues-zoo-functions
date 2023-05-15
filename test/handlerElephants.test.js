const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  test('Verifica se retorna undefined quando não inserido parâmetros', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  test('Verifica se retorna parâmetro inválido quano não é uma string.', () => {
    expect(handlerElephants(54)).toBe('Parâmetro inválido, é necessário uma string');
  });
  test('Verifica se retorna o valor ao adicionar uma chave', () => {
    expect(handlerElephants('popularity')).toEqual(5);
  });
  test('Verifica se count retorna o valor 4', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  test('Verifica se name retorna um array com names', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  test('Verifica se name retorna um array com names', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
});
