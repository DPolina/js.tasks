/* 
1. Написать функцию которая вернет одну из следующих строк в зависимости от значение входного параметр num:

- 'TIK' если num делится на 3 без остатка
- 'TAK' если num делится на 5 без остатка
- 'TIK-TAK' если num делится на 15 без остатка
- '' (пустая строка) если не выполняется ни одно условие выше
-  'Provided value is not a number' если num не является числом
*/

function tikTak(num) {
  // Your code should be here
  if (isNaN(num)) { 
    return 'Provided value is not a number.';
  } 
  let str = '';
  if (num % 3 == 0) {
    str = 'TIK';
  } 
  if (num % 5 == 0) {
    str = str + (str != '' ? '-' : '') + 'TAK';
  } 
  return str;
}
// These calls are to ensure that it works correctly:
console.log('1:', tikTak(1)) // => ''
console.log('6:', tikTak(6)) // => 'TIK'
console.log('10:', tikTak(10)) // => 'TAK'  
console.log('30:', tikTak(30)) // => 'TIK-TAK'
console.log('la-la:', tikTak('la-la')) // =>  'Provided value is not a number' 