// var total = 0;
//
// var arr = process.argv;
//
// var total = arr.reduce(function (accumulator, curr) {
//   return (Number(accumulator) || 0) + (Number(curr) || 0)
// })
//
// console.log(total);

// var fs = require('fs');
// var filePath = process.argv[2];
// var contents = fs.readFileSync(filePath).toString().split("\n");
//
// console.log(contents.length - 1);

// var fs = require('fs');
//
// fs.readFile(process.argv[2], 'utf8', function(err, data) {
//   if (err) return console.log(err)
//   console.log(data.split('\n').length - 1)
// })
//
// ## FILTERED LS (Exercise 5 of 13)
//
// var fs = require('fs')
// var path = require('path')
// var files = undefined
//
// var fileType = `.${process.argv[3]}`
//
// function findFiles(callback) {
//   fs.readdir(process.argv[2], function findFileType(err, list) {
//     if (err) return console.log(err)
//     files = list.filter(function (element) {
//       return path.extname(element) === fileType
//     })
//     callback()
//   })
// }
//
// function logFiles() {
//   console.log(files.join('\n'))
// }
//
// findFiles(logFiles)

// Challenge #6
var fileType = process.argv[3]
var dirname = process.argv[2]
var findFiles = require('./findFiles.js')

findFiles(dirname, fileType, function(err, data) {
  if (err) return console.log(err)
  console.log(data.join('\n'))
})
