class Person {
  static {}

  constructor(fn, ln) {
    this.fn = fn;
    this.ln = ln;
  }

  static createPerson(fn, ln) {
    return new this(fn, ln);
  }

  #formatName() {
    return `${this.fn} ${this.ln}`;
  }

  getFullName() {
    return this.#formatName();
  }
}

class User extends Person {
  constructor(fn, ln, email) {
    super(fn, ln);
    this.email = email;
  }

  getFullName() {
    return `${this.fn} ${this.ln} (${this.email})`;
  }
}

const klaus = new Person('Klaus', 'Müller');
console.log(klaus.getFullName());

const lisa = Person.createPerson('Lisa', 'Schmidt');
console.log(lisa.getFullName());

const paula = new User('Paula', 'Meier', 'pm@pm.de');
