import { getSaludo } from '../../src/pruebas-base/string';
describe('Pruebas en string.ts', () => {
  test('La funcion nos debe devolver un string', () => {
    const saludo = getSaludo('Diana');

    expect(saludo).toBe('Hola Diana');
    expect(typeof saludo).toBe('string');
    expect(saludo).toHaveLength(10);
  })

})