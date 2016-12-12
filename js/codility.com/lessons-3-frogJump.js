/*
 * Count minimal number of jumps from position X to Y.
 */

function solution(X, Y, D) {
  var diff = Y - X;
  if (diff <= 0) {
    return 0;
  } else if (D > diff) {
    return 1;
  } else if ((diff % D) === 0) {
    return diff / D;
  } else {
    return Math.floor(diff / D) + 1;
  }
}
