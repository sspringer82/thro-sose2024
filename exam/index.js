function User() {}

const lisa = new User();

User.prototype.age = 42;

const klaus = new User();

console.log(lisa.age);
console.log(klaus.age);

// named export
export function foo() {}
// default export
export default function bar() {}

// named import
import { foo } from './bar';
// default import
import bar from './bar';
