/*
 * Minimize the value |(A[0] + ... + A[P-1]) - (A[P] + ... + A[N-1])|.
 */

function solution(A) {
  var left = [];
  var i    = undefined;

  for (var i = 0; i < (A.length - 1); i++) {
    if (i === 0) {
      left[0] = A[0];
    } else {
      left[i] = A[i] + left[i-1];
    }
  }

  var right = [];
  for (i = A.length - 1; i > 0; i--) {
    if (i === A.length - 1) {
      right[i-1] = A[i];
    } else {
      right[i-1] = A[i] + right[i];
    }
  }

  return Math.min(...left.map(function(val, idx) {
    return Math.abs(val - right[idx]);
  }));
}
