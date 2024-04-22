import { readFileSync, readFile } from 'fs';
import { readFile as readFilePromise } from 'fs/promises';

const content = readFileSync('./input.txt', 'utf8');
console.log(content);

readFile('./input.txt', 'utf8', (err, data) => {
  console.log('async ', data);
});

const content2 = await readFilePromise('./input.txt', 'utf8');
console.log('Promise: ', content2);
