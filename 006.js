/*
6. Написать функцию, которая принимает массив и возвращает массив в обратном 
порядке. То есть, если передан ['a', 4, 'c'], то вернуться должно ['c', 4, 'a']. 
Если переданное значение не является массивом, то вернуть 'No array provided'.
*/

function reverseArray(arr) {
  // You code should be here
  if (arr instanceof Array == false) {
    return 'No array provided.';
  }
  if (arr.length == 0) {
    return []
  }

  // let marr = [];
  // for (let idx = arr.length - 1; idx >= 0; idx--) {
  //   marr.push(arr[idx]);
  // }
  // return marr;

  const center = Math.floor(arr.length / 2);
  for (let idx = 0; idx <= center; idx++) {
    const end = arr.length - 1 - idx;
    const num = arr[idx];
    arr[idx] = arr[end];
    arr[end] = num;
  }
  return arr;
}
// These calls are to ensure that it works correctly:
console.log('la-la:', reverseArray('la-la')) // => 'No array provided'   
console.log('[]:', reverseArray([])) // => []
console.log('[5,3,2,10]:', reverseArray ([5,3,2,10])) // => [10,2,3,5]
console.log('[5,3,2]:', reverseArray ([5,3,2])) // => [2,3,5]