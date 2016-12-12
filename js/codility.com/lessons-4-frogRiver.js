/*
 * Find the earliest time when a frog can jump to the other side of a river.
 */

function solution(X, A) {
  var leaves = [];
  A.forEach(function(leaf, sec) {
    if (leaves[leaf] === undefined) {
      leaves[leaf] = sec;
    } else if (sec < leaves[leaf]) {
      leaves[leaf] = sec;
    }
  });

  for (var i = 1; i <= X; i++) {
    if (leaves[i] === undefined) { return -1; }
  }

  return leaves.filter(function(sec, leaf) {
    return leaf <= X;
  }).reduce(function(max, sec) {
    return (sec > max) ? sec : max;
  }, -1);
}
