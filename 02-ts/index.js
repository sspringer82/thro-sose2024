"use strict";
class User {
    name;
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        return `Hello, ${this.name}`;
    }
}
const klaus = new User('Klaus');
console.log(klaus.sayHello());
const property = 'name';
console.log(klaus[property]);
