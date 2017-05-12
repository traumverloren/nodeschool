'use strict';

let promise = new Promise(function (resolve, reject) {
  resolve('I FIRED');
  reject(new Error('I DID NOT FIRE'));
});

function onReject(error) {
  console.log(error.message);
};

function onResolve(result) {
  console.log(result);
}

promise.then(onResolve,onReject);
