
/*
15. Написать функцию, которая принимает положительное число num, 
большее единицы, а в ответ возвращает массив чисел, полученных 
по следующему алгоритму:
1. Пoложить число num в массив (arr.push(num))
2. Если число четное (без остатка делится на 2), то num = num / 2, иначе num = num * 3 + 1
3. Если num == 1, то вернуть накопившися массив включая последнюю 1
4. Перейти в п.1

Предполгается, что будет использоваться while или do while
*/

function doSomeCalcs(num) {
  // Your code
  if (num <= 1 || isNaN(num)) {
    return 'The number should be a number above 1.'
  }
  let arr = [];
  while (num > 1) {
    arr.push(num);
    if (num % 2 == 0) {
      num = num / 2;
    } else {
      num = num * 3 + 1;
    }
  }
  arr.push(1);
  return arr;
}

console.log('4:',  doSomeCalcs(4)); // [4, 2, 1];
console.log('3:',  doSomeCalcs(3)); // [3, 10, 5, 16, 8, 4, 2, 1];  
console.log('\'a\':',  doSomeCalcs('a')); // The number should be a number above 1.
console.log('-1:',  doSomeCalcs(-1)); // The number should be a number above 1.
console.log('100:',  doSomeCalcs(100)); //   100, 50, 25, 76, 38, 19, 58, 29, 88, 44, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10,  5, 16,  8,  4, 2,  1
console.log('1:',  doSomeCalcs(1)); // 1.
