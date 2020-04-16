/*

9. Написать функцию, которая принимает на вход сумму счета amount, 
качество обслуживания от 1 до 3 и на выходе возвращает размер чаевых. 
Ниже указаны коэфициенты для качества:

1 = 0.05 (5%)
2 = 0.1 (10%)
3 = 0.15 (15%)

Например, если amount = 1000, а качество 2, то итоговые чаевые будут 1000 * 0.1 = 100/

Если amount или quantity не числа то вернуть 'Amount and quality should be numbers'.
Если amount < 0, то вернуть 'Amount should be equal to or more than 0'
Если quality не равно 1, 2 или 3 то вернуть 'Quality should be a number from 1 to 3'

*/

function tipCalculator(amount, quantity) {
  // You code should be here 
  if (isNaN(amount) || isNaN(quantity)) {
    return 'Amount and quality should be numbers.';
  }
  if (amount < 0) {
    return 'Amount should be equal to or more than 0.';
  }
  if (quantity < 1 || quantity > 3) {
    return 'Quality should be a number from 1 to 3.';
  }
  // let coeff = 0;
  // switch (quantity) {
  //   case 1: 
  //     coeff = 0.05;
  //     break;
  //   case 2:
  //     coeff = 0.1;
  //     break;
  //   case 3:
  //     coeff = 0.15;
  //     break;
  // }

  const coeff = {
    1: 0.05,
    2: 0.1,
    3: 0.15
  };

  const tip = amount * coeff[quantity];
  return tip;
}

// These calls are to ensure that it works correctly:  
// (Я тут подправила. Там у тебя почему-то в строках 41 - 43 не tipCalculator, а sumDice  стояло.)
console.log('(\'a\', 6):',  tipCalculator ('a', 6)) // =>  'Amount and quality should be numbers'         
console.log('(-1, 3):', tipCalculator (-1, 3)) // => 'Amount should be equal to or more than 0' 
console.log('(1000, 5):', tipCalculator (1000, 5)) // => 'Quality should be a number from 1 to 3' 
console.log('(2000, 3):', tipCalculator (2000, 3)) // => 300