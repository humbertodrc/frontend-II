import { reverseCallBack, reverseString } from '../../src/pruebas-base/callBack';
describe('Pruebas en callBack', () => {
  test('Debe reversar un string', () => {
    const resultado = reverseCallBack("Hola", reverseString)

    console.log(resultado);

    expect(resultado).toBe("aloH");
    expect(typeof resultado).toBe("string");
    expect(resultado).not.toBe("Hola");
  
  })

})