/*
16. Написать функцию, которая принимает массив arr 
и целое положительное число shift, и возвращает 
массив, у которого shift первых элементов помещены 
на конец массива. Пример: arr = [4,7,2,9,0] и 
shift = 3, результат должен быть [9,0,4,7,2].
*/

function arrayShift(arr, shift) {
  // Your code
  if (arr instanceof Array == false) {
    return 'First parameter should be an array.';
  }
  if (shift <= 0) {
    return 'Shift parameter should be bigger than zero.';
  }
  for (let idx = 0; idx < shift; idx++) {
    const num = arr.shift();
    arr.push(num);
  }
  return arr;
}

console.log('(\'a\', 2):', arrayShift('a', 2)); // First parameter should be an array
console.log('([0, 2, 3], -2):', arrayShift([0, 2, 3], -2)); // Shift parameter should be bigger than zero.
console.log('([4,7,2,9,0], 3):', arrayShift([4,7,2,9,0], 3)); // [9,0,4,7,2]
console.log('([4,7,2,9,0], 6):', arrayShift([4,7,2,9,0], 6)); // [7,2,9,0,4]