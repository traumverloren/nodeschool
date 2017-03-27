// console.log("beep boop");

// let fs = require('fs');
// fs.createReadStream(process.argv[2]).pipe(process.stdout);

// process.stdin.pipe(process.stdout);
//
// let through = require('through2');
// let stream = through(write, end);
//
// function write(buffer, encoding, next) {
//   let upperString = buffer.toString().toUpperCase();
//   this.push(`${upperString}`);
//   next();
// };
//
// function end(done) {
//   done();
// };
//
// process.stdin.pipe(stream).pipe(process.stdout);
//
//
// let through = require('through2');
//
// let tr = through(function (buffer, encoding, next) {
//   this.push(buffer.toString().toUpperCase());
//   next();
// });
//
// process.stdin.pipe(tr).pipe(process.stdout);
//
// let split = require('split');
// let through = require('through2');
// let lineNumber = 1;
//
// let tr = through(function (line, encoding, next) {
//   let transformedLine = line.toString();
//   (lineNumber % 2 ? transformedLine = transformedLine.toLowerCase() : transformedLine = transformedLine.toUpperCase());
//
//   this.push(`${transformedLine}\n`);
//   lineNumber++;
//   next();
// });
//
// process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);

// let concat = require('concat-stream');
//
// function reverseBuffer(input) {
//   let result = '';
//   result = input.toString().split('').reverse().join('');
//   process.stdout.write(result);
// };
//
// process.stdin.pipe(concat(reverseBuffer));

// let through = require('through2');
// let http = require('http');
// let fs = require('fs');
//
// let tr = through(function (buffer, encoding, next) {
//   this.push(buffer.toString().toUpperCase());
//   next();
// });
//
// let server = http.createServer(function (req, res) {
//   if (req.method === 'POST') {
//     req.pipe(tr).pipe(res);
//   } else
//   {
//     res.end('send me a POST\n')
//   };
// });
//
// server.listen(process.argv[2]);

// let request = require('request');
// let r = request.post('http://localhost:8099');
//
// process.stdin.pipe(r).pipe(process.stdout);
//
// let ws = require('websocket-stream');
// let stream = ws('ws://localhost:8099');
//
// stream.write('hello\n');

// HTML STREAM
// let through = require('through2');
// let trumpet = require('trumpet');
// let fs = require('fs');
// let tr = trumpet();
//
// let thru = through(function (buffer, encoding, next) {
//   this.push(buffer.toString().toUpperCase());
//   next();
// });
//
// let loud = tr.select('.loud').createStream();
// loud.pipe(thru).pipe(loud);
//
// process.stdin.pipe(tr).pipe(process.stdout);

// Duplexer
//
// let spawn = require('child_process').spawn;
// let duplexer = require('duplexer2');
//
// module.exports = function (cmd, args) {
//   let fs = spawn(cmd, args);
//   return duplexer(fs.stdin, fs.stdout);
// };

// Duplexer redux
// let duplexer = require('duplexer2');
// let Writable = require('stream').Writable;
// let ws = Writable({objectMode: true});
//
// module.exports = function (counter) {
//   let countries = {};
//   ws._write = function (chunk, enc, next) {
//     countries[chunk.country] = (countries[chunk.country] || 0) + 1;
//     next();
//   }
//   ws.on('finish', function() {counter.setCounts(countries) });
//
//   return duplexer({objectMode: true}, ws, counter);
// };

// Duplexer redux (with through)
let duplexer = require('duplexer2');
let through = require('through2').obj;

module.exports = function (counter) {
  let countries = {};
  let writer = through(write, end);

  function write(chunk, encoding, next) {
    countries[chunk.country] = (countries[chunk.country] || 0) + 1;
    next();
  };

  function end() {
    counter.setCounts(countries);
  };


  return duplexer({objectMode: true}, writer, counter);
};
