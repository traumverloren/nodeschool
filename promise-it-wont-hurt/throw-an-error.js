'use strict';

const data = process.argv[2];

// function parsePromised(json) {
//   return new Promise((resolve, reject) => {
//     try {
//        resolve(JSON.parse(json));
//     } catch(err) {
//        reject(err);
//     }
//   })
// }
//
// parsePromised(data).catch(console.log);


function parsePromised(json) {
  try {
    return Promise.resolve(JSON.parse(json));
  } catch(err) {
    return Promise.reject(err);
  }
}

parsePromised(data).then(null, console.log);
