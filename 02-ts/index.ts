function add(a: number, b: number): string | number {
  if (a % 2 === 0) {
    return a + b;
  }
  return 'Hello' as any;
}

const foo = add(3, 3);

function doSomething(x: 'Hello') {}

doSomething(foo);
