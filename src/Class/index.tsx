class User {
  name;
  sobrenome;

  constructor(name: string, sobrenome: string) {
    this.name = name;
    this.sobrenome = sobrenome;
  }
}

const primeiroUsuario = new User('Ricardo', 'Cardoso');
console.log(primeiroUsuario);