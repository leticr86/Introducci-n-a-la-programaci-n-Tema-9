class Persona {
  constructor(edad, nombre, telefono) {
    this._edad = edad;
    this._nombre = nombre;
    this._telefono = telefono;
  }

  get edad() {
    return this._edad;
  }

  set edad(nuevaEdad) {
    this._edad = nuevaEdad;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre;
  }

  get telefono() {
    return this._telefono;
  }

  set telefono(nuevoTelefono) {
    this._telefono = nuevoTelefono;
  }
}

class Cliente extends Persona {
  constructor(edad, nombre, telefono, credito) {
    super(edad, nombre, telefono);
    this._credito = credito;
  }

  get credito() {
    return this._credito;
  }

  set credito(nuevoCredito) {
    this._credito = nuevoCredito;
  }
}

class Trabajador extends Persona {
  constructor(edad, nombre, telefono, salario) {
    super(edad, nombre, telefono);
    this._salario = salario;
  }

  get salario() {
    return this._salario;
  }

  set salario(nuevoSalario) {
    this._salario = nuevoSalario;
  }
}

// Creamos un objeto Cliente y lo mostramos por consola
const cliente1 = new Cliente(30, "Juan", "123456789", 5000);
console.log(cliente1.edad); // 30
console.log(cliente1.nombre); // "Juan"
console.log(cliente1.telefono); // "123456789"
console.log(cliente1.credito); // 5000

// Creamos un objeto Trabajador y lo mostramos por consola
const trabajador1 = new Trabajador(25, "Ana", "987654321", 2500);
console.log(trabajador1.edad); // 25
console.log(trabajador1.nombre); // "Ana"
console.log(trabajador1.telefono); // "987654321"
console.log(trabajador1.salario); // 2500
