'use strict';

let promise = new Promise(function (resolve, reject) {
  setTimeout(() => reject(Error('REJECTED!')), 300);
});

function onReject(error) {
  console.log(error.message);
};

function onResolve(result) {
  console.log(result);
}

promise.then(onResolve,onReject);

// let promise = new Promise(function (resolve, reject) {
//   setTimeout(() => reject(Error('REJECTED!')), 300);
// });
//
// function onReject(error) {
//   console.log(error.message);
// };
//
// promise.then((result) => console.log(result)).catch(onReject);
