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

let passphrase = process.argv[3];
let cipher = process.argv[2];
let decipherStream = crypto.createDecipher(cipher, passphrase);

parser.on('entry', function (entry) {

  function write(hashedEntry) {
    this.push(`${hashedEntry} ${entry.path}\n`);
  }

  if (entry.type === 'File') {
    // have to pipe the file stream into a new MD5 stream everytime.
    let md5 = crypto.createHash('md5', { encoding: 'hex' });
    entry.pipe(md5).pipe(through(write)).pipe(process.stdout);
  }
});


process.stdin.pipe(decipherStream)
             .pipe(zlib.createGunzip())
             .pipe(parser);
