/*
5. Написать функцию, которая принимает числовый массив и суммирует 
все числа в этом массиве, и возвращает эту сумму.  Если какой-то 
элемент массива содержит не число, то вернуть, строку 'arr[idx] is
not a number - value', где вместо idx должыть быть индекс массива,
в котором найдено не число, и вместо value должно быть само найденное 
значение. Если переданное значение не является массивом, то вернуть 
'No array provided'. Если массив не содержит элементов, то вернуть 0.
*/

function sumArray(arr) {
  // You code should be here
  // Реализуй этот алгоритм используя for (), while () {} и do {} while () циклы. То есть, у тебя должно быть 3 реализации одного и того же.
  
  if (arr instanceof Array == false) {
    return 'No array provided.'
  }
  if (arr.length == 0) {
    return 0;
  }

  let sum = 0;


  // for (let idx = 0; idx < arr.length; idx++) {
    
  //   if (isNaN(arr[idx])) {
  //     return `arr[${idx}] is not a number - ${arr[idx]}.`;
  //   }
  //   sum = sum + arr[idx];
  // };
  // return sum 


  // let idx = 0;
  // const end = arr.length;
  // while (idx < end) {
  // if (isNaN(arr[idx])) {
  //   return `arr[${idx}] is not a number - ${arr[idx]}.`; 
  // }
  //   sum = sum + arr[idx++];
  // }
  // return sum


  let idx = 0;
  const end = arr.length;
  do {
    if (isNaN(arr[idx])) {
      return `arr[${idx}] is not a number - ${arr[idx]}.`;
    }
    sum = sum + arr[idx++];
  } while (idx < end);
  return sum
}

// These calls are to ensure that it works correctly:
console.log('la-la:', sumArray('la-la')) // => 'No array provided'   
console.log('[]:', sumArray([])) // => 0 
console.log('[5,3,2]:', sumArray([5,3,2])) // => 10
console.log('[\'la-la\',3,2]:', sumArray(['la-la',3,2])) // => 'arr[0] is not a number - la-la'