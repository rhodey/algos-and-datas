/*
 * Compute number of distinct values in an array.
 */

function solution(A) {
  return A.reduce(function(seen, val, idx) {
    seen[val] = 1;
    return (idx < (A.length - 1)) ? seen : Object.keys(seen).length;
  }, A.length > 0 ? new Array() : 0);
}
