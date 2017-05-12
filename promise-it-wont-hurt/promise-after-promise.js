'use strict';

// no need for these, already defined globally!
// function first() {
//   return new Promise(function(resolve, reject) {
//     resolve(42);
//   });
// }
//
// function second(firstData) {
//   first().then((result) => console.log(result))
// }
//
//
// function onFulfilled(result) {
//   console.log(result);
// }


first().then(second).then(console.log);
