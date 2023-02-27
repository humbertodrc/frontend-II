// princio de sustitucion de liskov con una clase animal
export class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    swin() {
        console.log(`${this.name} nada`);
    }
}

// princio de sustitucion de liskov con una clase perro
export class Perro extends Animal {
    constructor(name: string) {
        super(name);
    }
    swin() {
        console.log(`${this.name} nada`);
    }
}

// princio de sustitucion de liskov con una clase gato donde se rompe el principio porq no puede nadar
export class Gato extends Animal {
    constructor(name: string) {
        super(name);
    }
    swin() {
        throw new Error('No puedo nadar');
    }
}

// Solucion se pueden crear tipos de animales que pueden nadar y que no pueden nadar 