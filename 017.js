/*
17. Написать функцию, которая возвращает массив первых num чисел Фибоначи. 
Первые числа Фибоначи 1, 1, 1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8, и 
так далее. То есть, каждое следующее числоа рассчитывается суммой двух предыдущих.
*/

function fibonacci(num) {
  // Your code
  if (isNaN(num) || num < 3) {
    return 'The parameter should be a positive number greater than 0;';
  }
  const arr = [1, 1];
  for (let idx = 0; idx < num - 2; idx++) {
    let sum = arr[idx] + arr[idx + 1];
    arr.push(sum);
  }
  return arr;
}

console.log('\'a\':', fibonacci('a')); // The parameter should be a positive number greater than 2;
console.log('-3:', fibonacci(-3)); // The parameter should be a positive number greater than 2;  
console.log('3:', fibonacci(3)); // [1,1,2];
console.log('6:', fibonacci(6)); // [1,1,2,3,5,8];  
console.log('7:', fibonacci(7)); // [1,1,2,3,5,8,13];