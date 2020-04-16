/*
14. Написать функцию, которая принимает числа bannedNum от 2 до 
9 и maxNum, и возвращает массив чисел от 1 до maxNum, в значении 
которых нет числа bannedNum, и значение которых не является 
множителем bannedNum. Например, если bannedNum = 4, а maxNum = 20, 
то она должна вернуть массив [1, 2, 3, 5, 6, 7, 9, 10, 11, 13, 15, 17, 18, 19]
*/

function skipBannedNum(bannedNum, maxNum) {
  // Your code
  if (bannedNum < 0 || maxNum < 0 || isNaN(bannedNum) || isNaN(maxNum)) {
    return 'Both parameters should be positive numbers.';
  }
  let arr = []; 
  for (let idx = 1; idx < maxNum; idx++) {
    if (idx % bannedNum != 0 && idx.toString().search(bannedNum) == -1) {
      arr.push(idx);
    }
  }
  return arr;
}

console.log('(\'a\', 10):',  skipBannedNum('a', 10)); // Both parameters should be positive numbers.
console.log('(1, -10):',  skipBannedNum(1, -10)); // Both parameters should be positive numbers.
console.log('(4, 20):',  skipBannedNum(4, 20)); // [1, 2, 3, 5, 6, 7, 9, 10, 11, 13, 15, 17, 18, 19] 