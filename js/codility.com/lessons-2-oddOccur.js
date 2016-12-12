/*
 * Find value that occurs in odd number of elements.
 */

function solution(A) {
  var counts = [];
  A.forEach(function(val) {
    if (counts[val] === undefined) {
      counts[val] = 1;
    } else {
      counts[val] += 1;
    }   
  });

  return A.reduce(function(odd, val) {
    return counts[val] % 2 !== 0 ? val : odd;
  }, undefined);
}
