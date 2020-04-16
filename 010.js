/*
10. Написать функцию, которая на вход принимает массив с числами, и каждое число должно
иметь значение от 1 до 11 включительно. Функция должна пройти по массиву и просуммировать 
все числа. Если сумма больше 21, то вернуть 'Busted'. Если какой-то элемент массива равен 11, 
то заменить его на 1 при суммировании. Считай, что это карточную игра 21. На входе это
карты от 1 до 10, всякий валеты, дамы и короли = 10, а туз = 11. Если на входе не массив 
или какой-то элемент массива не число или число меньше 1 или больше 10, то вернуть 
'An array is expected with numbers from 1 to 11'.
*/

function blackJack(cards) {
  // You code should be here 
  if (cards instanceof Array == false) {
    return 'An array is expected with numbers from 1 to 11.';
  }
  let sum = 0;
  for (let idx = 0; idx < cards.length; idx++) {
    let card = Number(cards[idx]);
    if (isNaN(card) || card < 1 || card > 11) {
      return 'An array is expected with numbers from 1 to 11.';
    }
    if (card == 11) {
      card = 1;
    }
    sum = sum + card;
    if (sum > 21) {
      return 'Busted!';
    }
  }
  return sum;
}
// These calls are to ensure that it works correctly:
console.log('\'a\'', blackJack('a')) // => 'An array is expected with numbers from 1 to 11'.       
console.log('[1,\'s\',3]:', blackJack([1,'s',3])) // => 'An array is expected with numbers from 1 to 11'.  
console.log('[1,15,4]:', blackJack ([1,15,4])) // => 'An array is expected with numbers from 1 to 11'.  
console.log('[5,10,11,3]:', blackJack ([5,10,11,3])) // => 19
console.log('[5,10,11,5]:', blackJack ([5,10,11,5])) // => 21
console.log('[5,10,11,7]:', blackJack ([5,10,11,7])) // => 'Busted'

