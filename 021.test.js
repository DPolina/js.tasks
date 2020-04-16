
const bubbleSort = require('./021.js');

test('bubbleSort', () => {
  expect(bubbleSort([1,5,3,8,5])).toStrictEqual([1,3,5,5,8]);
  expect(bubbleSort([10,-1,9,2,8,3])).toStrictEqual([-1,2,3,8,9,10]);
  expect(bubbleSort(['a',1,4,2])).toStrictEqual('arr[0] = a is not a number');
  expect(bubbleSort([])).toStrictEqual('The array is empty.');
  expect(bubbleSort('something')).toStrictEqual('array is expected.');
});