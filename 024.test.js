const findNumber = require('./024.js');

test ('findNumber', () => {
  const arr = [1,3,5,6,8,10,23,25,50];
  expect(findNumber(arr, 50)).toStrictEqual(8);
  expect(findNumber(arr, 150)).toStrictEqual(-1);
  expect(findNumber(arr, 0)).toStrictEqual(-1);
  expect(findNumber(arr, 1)).toStrictEqual(0);
  expect(findNumber(arr, 10)).toStrictEqual(5);
  expect(findNumber(['a',1,4,2], 3)).toStrictEqual('arr[0] = a is not a number.');
  expect(findNumber([], 3)).toStrictEqual('The array is empty.');
  expect(findNumber('something', 3)).toStrictEqual('The array is expected.');
  expect(findNumber([1,3,5,10], 'a')).toStrictEqual('num should be a number.');
});