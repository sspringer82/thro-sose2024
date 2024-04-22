import Gummibaerchen from './user';
import { createUser as importedCreateUser } from './user';

import * as foo from './user';

console.log(foo);

function createUser() {}

const klaus = new Gummibaerchen('Klaus', 'Müller');
console.log(klaus.getFullName());

const lisa = importedCreateUser('Lisa', 'Schmidt');
console.log(lisa.getFullName());
