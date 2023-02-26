import Vehicle from "./vehicle";

// Open-Closed Principle
// Imaginemos que queremos agregar una logica
// que encienda el auto automaticamente
// al acelerar  (similar al Start-Stop)
// Para mantener el open-closed principle
// Deberiamos implementar esa funcion sin modificar
// la clase padre.

class Lamborghini extends Vehicle {}

export default Lamborghini;