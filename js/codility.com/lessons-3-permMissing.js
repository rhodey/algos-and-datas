/*
 * Find the missing element in a given permutation.
 */

function solution(A) {
  var seen = [];
  A.forEach(function(val) { seen[val] = true; });

  for (var n = 1; n <= A.length + 1; n++) {
    if (seen[n] === undefined) {
      return n;
    }
  }

  return 1;
}
