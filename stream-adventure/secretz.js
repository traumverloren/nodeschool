// SECRETZ
let combine = require('stream-combiner');
let tar = require('tar');
let through = require('through2');
let crypto = require('crypto');
let zlib = require('zlib');
let fs = require('fs');
let parser = tar.Parse();

// tar file in process.stdin
// 1. unzip tar file
// 2. decrypt tar file
// 3. parse tar file
// 4. go through it,
//   find files and print a md5 hash of contents + filename + \n


let decipherStream = crypto.createDecipher(process.argv[2], process.argv[3]);

parser.on('entry', function (entry) {
  if (entry.type === 'File') {
    let md5 = crypto.createHash('md5', { encoding: 'hex' });
    entry.pipe(md5).pipe(through(function (hashedFile) {
      process.stdout.write(`${hashedFile} ${entry.path}\n`);
    }));
  }
});


process.stdin.pipe(decipherStream)
             .pipe(zlib.createGunzip())
             .pipe(parser);
