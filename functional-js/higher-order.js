function repeat(operation, num) {
  let count;

  if (count < num) {
    operation();
    count++;
    return repeat(operation, num);
  }
}

module.exports = repeat
