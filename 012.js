/*
12. Написать функцию, которая принимает два положительных числа gold 
и pirates и возвращает: 

- Bad, если gold меньше чем pirates или если gold + pirates > 100
- Good, если gold как минимум столько же сколько и пиратов
- Great, если gold может быть поровну поделен на всех pirates. 

Например, если gold = 4, а pirates 5, то это просто Good, а 
вот если gold = 8, а pirates = 4, то каждому приату получается 
ровно по 2 gold, и это уже Great.
*/

function pirateShip(gold, pirates) {
  // Your code
  if (isNaN(gold) || isNaN(pirates) || gold < 0 || pirates <= 0) {
    return 'Parameters gold and pirates should be numbers above zero.';
  }
  if (gold < pirates || gold + pirates > 100) {
    return 'Bad.';
  }
  if (gold % pirates == 0) {
    return 'Great.';
  }
  if (gold > pirates) { 
    return 'Good.';
  }
}

console.log('(\'a\', 4):',  pirateShip('a', 4)); // => Parameters gold and pirates should be numbers above zero.
console.log('(-1, 4):',  pirateShip(-1, 4)); // => Parameters gold and pirates should be numbers above zero.  
console.log('(3, 4):',  pirateShip(3, 4)); // => Bad
console.log('(5, 96):',  pirateShip(5, 96)); // => Bad
console.log('(5, 4):',  pirateShip(5, 4)); // => Good  
console.log('(18, 6):',  pirateShip(18, 6)); // => Great