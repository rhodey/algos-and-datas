/*
 * Find the minimal positive integer not occurring in a given sequence.
 */

function solution(A) {
  var max  = Math.max(...A);
  var seen = [];

  A.forEach(function(val) { seen[val] = true; });

  for (var i = 1; i <= max + 1; i++) {
    if (seen[i] === undefined) {
      return i;
    }
  }

  return 1;
}
