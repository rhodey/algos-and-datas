/*
 * Rotate an array to the right by a given number of steps.
 */

function solution(A, K) {
  if (K === 0) {
    return A;
  } else {
    var res = [];
    for (var i = 0; i < A.length; i++) {
      res[(i + K) % A.length] = A[i];
    }
    return res;
  }
}
