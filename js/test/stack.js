var test = require('tape');
/*
 * STACKS ARE LAST IN FIRST OUT.
 */


var Item = function(val, next) {
  this.val  = val;
  this.next = next;
}

var Stack = function() {
  this.head = undefined;
}

Stack.prototype.push = function(val) {
  if (this.head === undefined) {
    this.head = new Item(val);
  } else {
    this.head = new Item(val, this.head);
  }
}

Stack.prototype.peek = function() {
  return (this.head === undefined) ? undefined : this.head.val;
}

Stack.prototype.pop = function() {
  if (this.head === undefined) {
    return undefined;
  } else {
    var res   = this.head;
    this.head = this.head.next;
    return res.val;
  }
}


test('testStack', function (t) {
  t.plan(10);

  var stack = new Stack();
  t.equal(stack.peek(), undefined);
  t.equal(stack.pop(),  undefined);

  stack.push(1);
  t.equal(stack.peek(), 1);
  t.equal(stack.pop(),  1);
  t.equal(stack.pop(),  undefined);

  stack.push(1);
  stack.push(2);
  stack.push(3);
  t.equal(stack.pop(),  3);
  t.equal(stack.peek(), 2);
  t.equal(stack.pop(),  2);
  t.equal(stack.pop(),  1);
  t.equal(stack.pop(),  undefined);
});
