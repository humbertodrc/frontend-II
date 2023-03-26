import { suma } from '../../src/pruebas-base/number';
describe('Pruebas en number.ts', () => {
  test('No debe retornar la suma de dos numeros', () => {
    const resultado = suma(10, 20);
    const numeroPrueba = 25;

    expect(resultado).toBe(30);
    expect(resultado).toBeLessThan(31);
    expect(resultado).not.toBeNaN();
  })

})