'use strict';

function a(name) {
  var temp = "Hello, ".concat(name, "!");
  return temp;
}

/**
 * Adds all the values in an array.
 * @param  {Array} arr an array of numbers
 * @return {Number}    the sum of all the array values
 */
var addArray = function addArray(arr) {
  var result = arr.reduce(function (a, b) {
    return a + b;
  }, 0);
  return result;
};

var res1 = a('kongzhi');
var res2 = addArray([1, 2, 3, 4]);
console.log(res1);
console.log(res2);
