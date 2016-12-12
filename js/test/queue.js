var test = require('tape');
/*
 * QUEUES ARE FIRST IN FIRST OUT.
 */


var Item = function(value) {
  this.value = value;
}

var Queue = function() {
  this.head = undefined;
  this.tail = undefined;
}

Queue.prototype.enqueue = function(value) {
  if (this.head === undefined) {
    this.head = new Item(value);
    this.tail = this.head;
  } else {
    this.head.left = new Item(value);
    this.head      = this.head.left;
  }
}

Queue.prototype.peek = function() {
  return (this.tail !== undefined) ? this.tail.value : undefined;
}

Queue.prototype.dequeue = function() {
  if (this.tail !== undefined && this.tail.left !== undefined) {
    var value = this.tail.value;
    this.tail = this.tail.left;
    return value;
  } else if (this.tail !== undefined) {
    var value = this.tail.value;
    this.head = this.tail = undefined;
    return value;
  } else {
    return undefined;
  }
}


test('testQueue', function (t) {
  t.plan(14);

  var queue = new Queue();
  t.equal(queue.peek(),    undefined);
  t.equal(queue.dequeue(), undefined);

  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);

  t.equal(queue.peek(),    1);
  t.equal(queue.dequeue(), 1);

  queue.enqueue(4);

  t.equal(queue.peek(),    2);
  t.equal(queue.dequeue(), 2);
  t.equal(queue.peek(),    3);
  t.equal(queue.dequeue(), 3);
  t.equal(queue.peek(),    4);
  t.equal(queue.dequeue(), 4);

  t.equal(queue.peek(),    undefined);
  t.equal(queue.dequeue(), undefined);

  queue.enqueue(5);

  t.equal(queue.peek(),    5);
  t.equal(queue.dequeue(), 5);
});
