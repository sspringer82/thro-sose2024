type Person = {
  name: string;
  age: number;
};

function greet(person: Omit<Person, 'age'>) {
  return `Hello ${person.name}`;
}
