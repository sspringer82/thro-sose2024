document.addEventListener('DOMContentLoaded', () => {
  const h1 = document.querySelector('h1');
  console.log(h1);
});

let number = 42;
console.log(number);

const name = 'John Doe';
// name = 'Peter Parker'; // type error

const person = {
  name: 'John Doe',
  age: 42,
};
person.name = 'jane Doe';
console.log(person);

const number2 = 0.1 + 0.2;
console.log(number2);

const nullValue = null;
const undefinedValue = undefined;

// const uninitializedValue;
// console.log(uninitializedValue); // undefined

const s1 = 's1';
const s2 = 's2';
const s3 = `s3${s1}`;

const person2 = {
  name: 'John Doe',
  age: 42,
  greet() {
    return `Hello, my name is ${this.name}`;
  },
};

const myProp = 'age';

console.log(person2[myProp]);

// infinte loop
// while (true) { break;}

// do {break; } while (true);

for (;;) {
  break;
}

const result = add(1, 2);
console.log('add: ', result);

function add(a, b) {
  return a + b;
}

let sub = function (a, b) {
  return a - b;
};
console.log(sub(2, 1));

function multiply(a, b) {
  return a * b;
}

function doSomething(value) {
  const result = value(1, 2);
  console.log(result); // 2
}
doSomething(multiply());
doSomething(add);
doSomething(sub);
