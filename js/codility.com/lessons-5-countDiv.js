/*
 * Compute number of integers divisible by k in range [a..b].
 */

function solution(A, B, K) {
  return parseInt(B/K) - parseInt(A/K) + (A % K ? 0 : 1);
}
