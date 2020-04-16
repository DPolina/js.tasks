/*
19. Написать функцию, которая на вход принимает массив arr и значение val, 
и на выходе возвращает, индекс в массиве, в котором найдено val. Если в 
массиве не найдено, то вернуть -1. В данном случае, val может быть чем 
угодно, как и массив может содержать что угодно.
*/

function checkVal(val) {
  return function(el) { 
    return el == val;
  }
}

function findValInArr(arr, val) {
  // Your code
  if (arr instanceof Array == false) {
    return 'First parameter should be an array.';
  }
  //const idx = arr.indexOf(val);
  //const idx = arr.findIndex(checkVal(val));
  // const idx = arr.findIndex(function (el) {
  //   return el == val;
  // });
  for (let idx = 0; idx < arr.length; idx++) {
    if (arr[idx] == val) {
      return idx;
    }
  }
  return -1;
}

console.log('(\'a\', 3):', findValInArr('a', 3)); // First parameter should be an array
console.log('([1,2, 5, 50, 33], \'\a\'):', findValInArr([1,2, 5, 50, 33] , 'a')); // -1  
console.log('([1,2,\'a\', 5], \'\a\'):', findValInArr([1,2,'a',5], 'a')); // 2
console.log('([1,2, 5, 50, 33], 1):', findValInArr([1,2, 5, 50, 33] , 1)); // 0
console.log('([1,2, 5, 50, 33], 33):', findValInArr([1,2, 5, 50, 33] , 33)); // 4
