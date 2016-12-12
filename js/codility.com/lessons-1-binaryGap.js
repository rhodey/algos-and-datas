/*
 * Find longest sequence of zeros in binary representation of an integer.
 */

function solution(N) {
  var gaps = [];
  var gap = 0;
  var haveBound = false;
  var bits = new Number(N).toString(2).length;

  for (var bit = 0; bit < bits; bit++) {
    if (((N >> bit) & 1) === 0 && haveBound === true) {
      gap++;
    } else {
      gaps.push(gap);
      gap = 0;
      haveBound = true;
    }
  }

  return Math.max(...gaps);
}
