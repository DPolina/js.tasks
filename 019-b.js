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
 
  const idx = arr.findIndex(function (el) {
    return el.name == val;
  });

  return idx;
}

console.log('(\'a\', 3):', findValInArr('a', 3)); // First parameter should be an array

console.log('result:', findValInArr([
  {
    name: 'Sergey',
    age: 40
  },
  {
    name: 'Polina',
    age: 17
  },
  {
    name: 'Julia',
    age: 38
  }
], 'Polina'));
