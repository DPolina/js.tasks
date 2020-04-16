// 2. Написать функцию, которая для переданного num вернет сумму от 1 до num. Например, если передано 3, 
// то результат должен быть 1 + 2 + 3 = 6. Если передано не число, то нужно вернуть строку  'Provided value is not a number'. 
// Если передано 1, то должно результат должен быть 1. Если передано число меньше 1, то рузультат 'Value should be equal 
// to or more than 1'.

function sumUpTo(num) {
  // Your code should be here
  if (isNaN(num)) {
    return 'Provided value is not a number.';
  } else if (num < 1) {
    return 'Value should be equal to or more than 1';
  } 
  let sum = 0;
  for (let idx = 1; num >= idx; idx++) {
    sum = sum + idx;
  }

  /*
  1: sum = 0, idx = 1, num = 3, num(3) >= idx(1) = true, sum = sum(0) + idx(1) = 2;
  2: sum = 2, idx = 2, num = 3, num(3) >= idx(2) = true, sum = sum(2) + idx(2) = 4;
  3: sum = 4, idx = 3, num = 3, num(3) >= idx(3) = true, sum = sum(4) + idx(3) = 7;
  4: sum = 7, idx = 4, num = 3, num(3) >= idx(4) = false;
  4: return sum(7)
  */
  return sum;
}
// These calls are to ensure that it works correctly:
console.log('la-la:', sumUpTo ('la-la')) // =>  'Provided value is not a number'    
console.log('0:', sumUpTo(0)) // => 'Value should be equal to or more than 1'.
console.log('1:', sumUpTo(1)) // => 1
console.log('3:', sumUpTo(3)) // => 6
console.log('10:', sumUpTo(10)) // => 55