var test = require('tape');
/*
 * STACKS ARE LAST IN FIRST OUT.
 */


var Item = function(value, next) {
  this.value = value;
  this.next  = next;
}

var Stack = function() {
  this.top = undefined;
}

Stack.prototype.push = function(value) {
  if (this.top === undefined) {
    this.top = new Item(value);
  } else {
    this.top = new Item(value, this.top);
  }
}

Stack.prototype.peek = function() {
  return (this.top !== undefined) ? this.top.value : undefined;
}

Stack.prototype.pop = function() {
  if (this.top === undefined) {
    return undefined;
  } else {
    var value = this.top.value;
    this.top  = this.top.next;
    return value;
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
