/*
23. Написать функцию, которая сортирует массив  случайным образом. Например, если 
передан массив [1,4,6,3], то на выходе должен получиться другой случайный порядок.
*/

function randomSort(arr) {
   // Your code
   if (arr instanceof Array == false) {
    return 'array is expected.';
  }
  if (arr.length == 0) {
    return 'The array is empty.';
  }
  for (let idx = 0; idx < arr.length; idx++) {
    if (isNaN(arr[idx])) {
      return `arr[${idx}] = ${arr[idx]} is not a number.`;
    }
    let num = arr[idx];
    let rndPos = Math.floor(Math.random() * arr.length)
    arr[idx] = arr[rndPos];
    arr[rndPos] = num;
  } 
  return arr;
}

module.exports = randomSort;