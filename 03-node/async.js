function doSomething() {
  setTimeout(() => {
    const value = 'asdf';
    return value;
  }, 1000);
}

console.log(doSomething());

// Callback

function doSomething2(callback) {
  setTimeout(() => {
    const value = 'asdf';
    callback(value);
  }, 1000);
}

function callback(value) {
  console.log(value);
}
doSomething2(callback);

// Callback hell
/*open('myFile', (handle) => {
  read(handle, (data) => {
    console.log(data);
    close(handle, () => {});
  });
});*/

// Promises

function doSomething3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const value = 'asdf';
      resolve(value);
    }, 1000);
  });
}

console.log('a');
doSomething3().then((value) => {
  console.log(value);
});
console.log('b');

// promise chain
/*
let handle;
open('file')
  .then((h) => {
    handle = h;
    return read(h);
  })
  .then((data) => {
    console.log(data);
    return close(handle);
  })
  .then(() => {
    console.log('finish');
  });
*/

async function handleSomethingAsync() {
  console.log('a');
  const content = await doSomething3();
  console.log(content);
  console.log('b');
  return 'Hello';
}

console.log(await handleSomethingAsync());
