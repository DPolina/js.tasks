/*
13. Написать функцию, которая принимает три положительных 
числа sum - сумма в центах, nickels - количество монет 
стоимостью 5 центов, и pennies - количество монет
достоинством 1 цент. На выходе она должна вернуть 
true (тип boolean, не строка), если у тебя достаточно 
pennies и nickels, что бы достичь сумму sum, и false, 
если недостаточно. Например, если на входе sum = 43, 
nickels = 10, pennies = 20, то функция должна вернуть 
true, так как чтобы получить сумму в 43 цента, тебе 
нужно 8 nickels (8 * 5 = 40) и 3 pennies (3 * 1 = 3).
Это функция не подразумевает использование циклов вообще.
*/

function correctChange(sum, nickels, pennies) {
  // Your code
  if (isNaN(sum) || isNaN(nickels) || isNaN(pennies) || sum < 0 || nickels < 0 || pennies < 0) {
    return 'Sum, nickels and pennies should be positive numbers.';
  }
  nickels = nickels * 5;
  if (nickels + pennies >= sum) {
    return true;
  }
  return false;
}

console.log('sum = 43, nickels = 10, pennies = 20:',  correctChange(43, 10, 20)); // True
console.log('sum = 63, nickels = 10, pennies = 20:',  correctChange(63, 10, 20)); // True  
console.log('sum = 163, nickels = 10, pennies = 20:',  correctChange(163, 10, 20)); // False
console.log('sum = \'dd\', nickels = 10, pennies = 20:',  correctChange('dd', 10, 20)); // 'Sum, nickels and pennies should be positive numbers'