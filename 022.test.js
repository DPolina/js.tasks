
const selectionSort = require('./022.js');

test('selectionSort', () => {
  expect(selectionSort([1,5,3,8,5])).toStrictEqual([1,3,5,5,8]);
  expect(selectionSort([10,-1,9,2,8,3])).toStrictEqual([-1,2,3,8,9,10]);
  expect(selectionSort(['a',1,4,2])).toStrictEqual('arr[0] = a is not a number');
  expect(selectionSort([])).toStrictEqual('The array is empty.');
  expect(selectionSort('something')).toStrictEqual('array is expected.');
});