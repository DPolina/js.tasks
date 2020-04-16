const randomSort = require('./023.js');

test('randomSort', () => {
  const arr = [8, 0, 4, 7, 14];
  const res1 = randomSort([...arr]);
  const res2 = randomSort([...arr]);

  expect(arr.length).toEqual(res1.length);
  expect(arr.length).toEqual(res2.length);
  
  expect(res1).toEqual(expect.arrayContaining(arr));
  expect(res2).toEqual(expect.arrayContaining(arr));

  expect(res1).not.toEqual(arr);
  expect(res2).not.toEqual(res1);

  expect(randomSort('123')).toStrictEqual('array is expected.');
  expect(randomSort([80,'a',2,5,7,0])).toStrictEqual('arr[1] = a is not a number.');
  expect(randomSort([])).toStrictEqual('The array is empty.');
});