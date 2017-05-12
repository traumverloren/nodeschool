'use strict';

let promise = new Promise(function (resolve, reject) {
  resolve('PROMISE VALUE');
});

promise.then((result) => console.log(result));

console.log('MAIN PROGRAM');
