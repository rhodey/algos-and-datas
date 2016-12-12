var test = require('tape');
/*
 * QUEUES ARE FIRST IN FIRST OUT.
 */


var Node = function(key, left, right) {
  this.key   = key;
  this.left  = left;
  this.right = right;
}

//Node.prototype.isLeaf()
