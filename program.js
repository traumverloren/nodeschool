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
// var fileType = process.argv[3]
// var dirname = process.argv[2]
// var findFiles = require('./findFiles.js')
//
// findFiles(dirname, fileType, function(err, data) {
//   if (err) return console.log(err)
//   console.log(data.join('\n'))
// })

// Challenge #8
// var http = require('http')
//
// http.get(process.argv[2], function callback(response) {
//   response.setEncoding('utf8');
//   var body = ''
//   response.on('data', function(chunk) {
//     body += `${chunk}`
//   })
//   response.on('error', function(err) {
//     console.log(err)
//   })
//   response.on('end', function() {
//     console.log(`${body.length}`)
//     console.log(body)
//
//   })
// })

// Challenge 9 -first solution
// var http = require('http')
//
// http.get(process.argv[2], function callback(response) {
//   response.setEncoding('utf8');
//   var body = ''
//   response.on('data', function(chunk) {
//     body += `${chunk}`
//   })
//   response.on('error', function(err) {
//     console.log(err)
//   })
//   response.on('end', function() {
//     console.log(body)
//   })
// })
//
// http.get(process.argv[3], function callback(response) {
//   response.setEncoding('utf8');
//   var body = ''
//   response.on('data', function(chunk) {
//     body += `${chunk}`
//   })
//   response.on('error', function(err) {
//     console.log(err)
//   })
//   response.on('end', function() {
//     console.log(body)
//   })
// })
//
// http.get(process.argv[4], function callback(response) {
//   response.setEncoding('utf8');
//   var body = ''
//   response.on('data', function(chunk) {
//     body += `${chunk}`
//   })
//   response.on('error', function(err) {
//     console.log(err)
//   })
//   response.on('end', function() {
//     console.log(body)
//   })
// })

// Challenge #9, 2nd solution:
// var http = require('http')
// var results = []
// var count = 0
//
// function httpGet(index) {
//   http.get(process.argv[2+index], function callback(response) {
//     response.setEncoding('utf8');
//     var body = ''
//     response.on('data', function(chunk) {
//       body += `${chunk}`
//     })
//     response.on('error', function(err) {
//       console.log(err)
//     })
//     response.on('end', function() {
//       results[index] = body
//       count++
//
//       // count gotta be in the end, since we are waiting on all the chunks for the 3 urls to finish!
//       if (count === 3) {
//          results.forEach(function(result) {
//           console.log(result)
//         })
//       }
//     })
//   })
// }
//
// for (var i = 0; i < 3; i++) {
//   httpGet(i)
// }

// Challenge #10
// var net = require('net')
// var port = process.argv[2]
//
// var server = net.createServer(function(socket) {
//   var date = new Date()
//   var year = date.getFullYear()
//   var month = date.getMonth() + 1
//   var day = date.getDate()
//   var hours = date.getHours()
//   var min = date.getMinutes()
//
//   if (min < 10 ) { min = "0" + min}
//   socket.write(`${year}-${month}-${day} ${hours}:${min}\n`)
//   socket.end()
// })
//
// server.listen(port)

// Challenge #11
// var http = require('http')
// var fs = require('fs')
// var port = process.argv[2]
// var dirname = process.argv[3]
//
// var server = http.createServer(function(request, response) {
//   var stream = fs.createReadStream(dirname)
//   stream.pipe(response)
// })
// server.listen(port)

// CHallenge #12
var http = require('http')
var map = require('through2-map')
var port = process.argv[2]

var server = http.createServer(function(request, response) {
  request.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase()
  })).pipe(response)
})
server.listen(port)
