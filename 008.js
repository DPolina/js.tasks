/* 
8. Написать функцию, которая принимает два числа num1 и num2 и
 вовзращает их сумму, если они не равны друг другу, или удвоенную 
 их сумму, если они равны друг другу. Например, если переданы 
 3 и 5, то результат 8. Если переданы 6 и 6, то вернуть 24. При 
 этом, если если num1 или num2 не являются числами то вернуть 
 ошибку 'Both parameters should be numbers'. Если num1 или num2 
 меньше 1 или больше 6, то нужно вернуть 'Both numbers should be 
 more or equal to 1 and less or equal to 6'
*/

function sumDice(num1, num2) {
 // You code should be here  
  if (isNaN(num1) || isNaN(num2)) {
    return 'Both parameters should be numbers.';
  }
  if (num1 < 1 || num1 > 6 || num2 < 1 || num2 > 6) {
    return 'Both numbers should be more or equal to 1 and less or equal to 6.';
  }
  let sum = num1 + num2;
  if (num1 == num2) {
    sum = sum * 2;
  }
  return sum;
}
// These calls are to ensure that it works correctly:
console.log('(\'a\', 6:)', sumDice  ('a', 6)) // =>  'Both parameters should be numbers'       
console.log('(0, 5):', sumDice  (0, 5)) // =>  'Both numbers should be more or equal to 1 and less or equal to 6'    
console.log('(1,5):', sumDice  (1,5)) // => 6
console.log('(3,3):',  sumDice  (3,3)) // => 12