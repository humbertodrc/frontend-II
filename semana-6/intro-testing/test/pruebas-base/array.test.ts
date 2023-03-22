import { getTechnologies } from '../../src/pruebas-base/array';
describe('Pruebas en Array.ts', () => {
  test('Nos debe retornar una array de string', () => {

    const technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'Angular'];

    const resultado = getTechnologies();

    expect(resultado).toEqual(technologies);
    expect(resultado).toContain('HTML');
  })
})