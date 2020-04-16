/*
11. Написать функцию, которая принимает число num от -20 до 20 и 
в ответ возвращает его строковое представление. Например, если 
num = 4, то функция должна вернуть строку 'Four'. Если -2, то 
должна вернуть строку 'Minus Two';
*/
const numbers = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five'];
function toStringNumFrom1to20(num) {
  // Your code
  if (isNaN(num)) {
    return 'Not a number.'; 
  }
  if (num < -5 || num > 5) {
    return 'The number should be between -5 and 5.';
  }
  let str = '';
  if (num < 0) {
    num = Math.abs(num);
    str = 'Minus ';
  }
  str = str + numbers[num];
  return str;
}

console.log('\'a\':',  toStringNumFrom1to20('a')); // => Not a number
console.log('34:',  toStringNumFrom1to20(34)); // => The number should be between -20 and 20.
console.log('0:',  toStringNumFrom1to20(0)); // => Zero
console.log('5:',  toStringNumFrom1to20(5)); // => Five  
console.log('-3:',  toStringNumFrom1to20(-3)); // => Minus Three