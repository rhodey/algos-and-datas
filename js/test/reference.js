var test = require('tape');
/*
 * MATH
 */


test('testBinary', function (t) {
  t.plan(1);
  t.equal(new Number(1020).toString(2), '1111111100');
});

test('testModulus', function (t) {
  t.plan(2);
  t.ok((3 % 2) !== 0);
  t.ok((4 % 2) === 0);
});

test('testRounding', function (t) {
  t.plan(3);
  t.equal(Math.round(2.5), 3);
  t.equal(Math.floor(2.8), 2);
  t.equal(Math.ceil(2.2),  3);
});

test('testMinMax', function (t) {
  t.plan(2);
  var nums = [1, 4, 3, 6];
  t.equal(Math.min.apply(null, nums), 1);
  t.equal(Math.max.apply(null, nums), 6);
});


/*
 * STRINGS
 */
test('testStringBasic', function (t) {
  t.plan(7);
  t.equal('ABCd'.toLowerCase(), 'abcd');
  t.equal('abcd'.toUpperCase(), 'ABCD');
  t.equal('abcd'.indexOf('b'),       1);
  t.equal('abcd'.indexOf('bc'),      1);
  t.equal('abcd'.indexOf('g'),      -1);
  t.equal('abcd'.charAt(1),        'b');
  t.equal('abcd'.charAt(5),         '');
});

test('testStringSplitSubstringReplace', function (t) {
  t.plan(14);
  var chars = 'abc'.split('');
  t.equal(chars.length,   3);
  t.equal(chars[0],     'a');
  t.equal(chars[1],     'b');
  t.equal(chars[2],     'c');

  var split = 'lol,wut'.split(',');
  t.equal(split.length,     2);
  t.equal(split[0],     'lol');
  t.equal(split[1],     'wut');

  t.equal('abcd'.substring(0),    'abcd');
  t.equal('abcd'.substring(1),    'bcd');
  t.equal('abcd'.substring(1, 2), 'b');
  t.equal('abcd'.substring(1, 4), 'bcd');
  t.equal('abcd'.substring(1, 9), 'bcd');

  t.equal('abcd'.replace('a', 'b'), 'bbcd');
  t.equal('abcd'.replace('a', ''),  'bcd');
});


/*
 * ARRAYS
 */
test('testQueue', function (t) {
  t.plan(6);
  var arr = [1, 2, 3, 4];
  t.equal(arr.pop(),      4);
  t.equal(arr.push(9),    4);
  t.equal(arr.pop(),      9);
  t.equal(arr.shift(),    1);
  t.equal(arr.unshift(8), 3);
  t.equal(arr.shift(),    8);
});

test('testSlice', function (t) {
  t.plan(12);
  var arr    = [1, 2, 3, 4];
  var sliced = arr.slice(0);
  t.ok(arr.length == sliced.length);

  sliced = arr.slice(1);
  t.equal(sliced.length, 3);
  t.equal(sliced[0],     2);
  t.equal(sliced[1],     3);
  t.equal(sliced[2],     4);

  sliced = arr.slice(1, 3);
  t.equal(sliced.length, 2);
  t.equal(sliced[0],     2);
  t.equal(sliced[1],     3);

  sliced = arr.slice(1, 8);
  t.equal(sliced.length, 3);
  t.equal(sliced[0],     2);
  t.equal(sliced[1],     3);
  t.equal(sliced[2],     4);
});

test('testForEach', function (t) {
  t.plan(1);
  var arr = [1, 2, 3, 4];
  var sum = 0;
  arr.forEach(function(val, idx, arr) {
    sum += val;
  });

  t.equal(sum, (1+2+3+4));
});

test('testFilter', function (t) {
  t.plan(3);
  var arr = [1, 2, 3, 4];
  var odd = arr.filter(function(val, idx, arr) {
    return val % 2 !== 0;
  });

  t.equal(odd.length, 2);
  t.equal(odd[0],     1);
  t.equal(odd[1],     3);
});

test('testMap', function (t) {
  t.plan(4);
  var arr     = [1, 2, 3, 4];
  var squared = arr.map(function(val, idx, arr) {
    return val * val;
  });

  t.equal(squared[0], 1*1);
  t.equal(squared[1], 2*2);
  t.equal(squared[2], 3*3);
  t.equal(squared[3], 4*4);
});

test('testReduce', function (t) {
  t.plan(1);
  var arr = [1, 2, 3, 4];
  var sum = arr.reduce(function(sum, val) {
    return sum + val;
  }, 0);

  t.equal(sum, (1+2+3+4));
});


/*
 * SETS
 */
test('testReduce', function (t) {
  t.plan(1);
  var arr = [1, 2, 3, 4];
  var sum = arr.reduce(function(sum, val) {
    return sum + val;
  }, 0);

  t.equal(sum, (1+2+3+4));
});
