export class User {
  constructor(fn, ln, email) {
    this.fn = fn;
    this.ln = ln;
    this.email = email;
  }

  getFullName() {
    return `${this.fn} ${this.ln} (${this.email})`;
  }
}

const klaus = new User('klaus', 'müller', 'km');
export default klaus;
