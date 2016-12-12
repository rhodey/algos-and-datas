/*
 * Check whether array A is a permutation.
 */

function solution(A) {
  var counts = [];
  A.forEach(function(val) {
    if (counts[val] === undefined) {
      counts[val] = 1;
    } else {
      counts[val] = 666;
    }
  });

  for (var i = 1; i < A.length + 1; i++) {
    if (counts[i] === undefined || counts[i] > 1) {
      return 0;
    }
  }

  return 1;
}
