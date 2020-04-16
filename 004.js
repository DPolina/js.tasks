/*
4. Написать функцию, которая в переданном ей массиве arr чисел найдет максимальное и 
минимальное числа. Если какой-то элемент массива содержит не число, то вернуть, 
строку 'arr[idx] is not a number - value', где вместо idx должны быть индекс массива, 
в котором найдено не число, и вместо value должно быть само найденное значение. 
Если переданное значение не является массивом, то вернуть 'No array provided'. Если 
массив не содержит элементов, то вернуть 'The array is empty'.
*/

function findMinMax(arr) {
  // You code should be here
  if (arr instanceof Array == false) {
    return 'No array provided';
  }
  if (arr.length == 0) {
    return 'The array is empty.';
  }
  let min = arr[0];
  let max = arr[0];
  for (let idx = 0; idx < arr.length; idx++) {
    if (isNaN(arr[idx])) {
      return `arr[${idx}] is not a number = ${arr[idx]}`;
    }
    if (min > arr[idx]) {
      min = arr[idx];
    }
    if (max < arr[idx]) {
      max = arr[idx];
    }
  }
  return {
    min,
    max 

  };
}
// Дано: Массив 3, 1, 10
// Найти: В min положить минимальное число из массива, а в max положить максимальное число
// Вопросы: 
// Чему изначально должны быть равны min & max?
// Как мы ищем эти значения?
// Решение:
// 1. Берем 1-ый элемент массива и сохраняем в min & max. В нашем случае min = 3, max = 3
// 2. 
// These calls are to ensure that it works correctly:
console.log('la-la:', findMinMax('la-la')) // =>  'No array provided'   
console.log('[]:', findMinMax([])) // =>  ' The array is empty ' 
console.log('[5,3,\'la-la\']:', findMinMax([5,3,'la-la'])) // =>  ' arr[2] is not a number = la-la '   
console.log('[5,3,8,-1,50]:', findMinMax([5,3,8,-1,50])) // =>  { min: -1, max: 50 }