'use strict';

function a(name) {
  const temp = `Hello, ${name}!`;
  return temp;
}

/**
 * Adds all the values in an array.
 * @param  {Array} arr an array of numbers
 * @return {Number}    the sum of all the array values
 */
const addArray = arr => {
  const result = arr.reduce((a, b) => a + b, 0);
  return result;
};

const res1 = a('kongzhi');
const res2 = addArray([1, 2, 3, 4]);

console.log(res1);
console.log(res2);
