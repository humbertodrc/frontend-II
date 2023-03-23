import { getTechnologiesByGroup } from '../../src/pruebas-base/funciones';


describe('Pruebas en funciones.ts', () => {

  const esperado = [                                                                                                           
    {                                                                                                         
      id: 1,                                                                                                  
      name: 'HTML',                                                                                           
      description: 'HyperText Markup Language',                                                               
      group: 'Frontend'
    },
    {
      id: 2,
      name: 'CSS',
      description: 'Cascading Style Sheets',
      group: 'Frontend'
    },
    {
      id: 3,
      name: 'JavaScript',
      description: 'JavaScript is a programming language',
      group: 'Frontend'
    },
    {
      id: 4,
      name: 'React',
      description: 'React is a JavaScript library',
      group: 'Frontend'
    },
    {
      id: 5,
      name: 'Angular',
      description: 'Angular is a TypeScript framework',
      group: 'Frontend'
    }
  ]

  test('La funcion nos deberia retornar un array de group', () => {
    const parametro = 'Frontend';

    const resultado = getTechnologiesByGroup(parametro);

    // console.log(resultado);
    // expect(resultado).toHaveReturnedWith(esperado);
    expect(resultado).toEqual(esperado);
  
  })

  test('La funcion debe retornar un valor cuando se llame al menos una vez', () => {
   
    const parametro = 'Frontend';

    const myFunction = jest.fn(getTechnologiesByGroup);

    console.log(myFunction(parametro));

    expect(myFunction).toBeCalled();
    expect(myFunction).toHaveBeenCalled();
    expect(myFunction).toHaveBeenCalledTimes(1);
    expect(myFunction).toHaveReturned();

  })
})