module.exports = function reverse (number) {
  // Convert the number to a string, split it into an array of characters,
    // reverse the array, join it back into a string, and convert it back to a number
    return parseInt(String(number).split('').reverse().join(''), 10);
}
