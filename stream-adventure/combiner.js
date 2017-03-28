// Combiner

let combine = require('stream-combiner');
let through = require('through2');
let split = require('split');
let zlib = require('zlib');

module.exports = function () {
  let genre;
  return combine(
    split(),
    through(write, end),
    zlib.createGzip()
  );

  function write(data, encoding, next) {
    if (data.length === 0) {
      return next();
    }

    let entry = JSON.parse(data);

    if (entry.type === 'genre') {
      if (genre) {
        this.push(`${JSON.stringify(genre)}\n`);
      }
      genre = {
        name: entry.name,
        books: []
      }
    } else if (entry.type === 'book') {
      genre.books.push(entry.name);
    }
    next();
  };

  function end(next) {
    if (genre) {
      this.push(`${JSON.stringify(genre)}\n`);
    }
    next();
  };
};
