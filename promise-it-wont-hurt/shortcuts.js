'use strict';

let promise = Promise.resolve('SECRET VALUE');

function onReject(error) {
  console.log(error.message);
};

promise.catch(onReject);
