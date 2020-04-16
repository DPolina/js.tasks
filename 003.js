/*
3. Написать функцию, которая вернет true если переданный год year является високосным, и false в 
противном случае. Описание високосного года тут ..., Григорианский календарь. Если передано не 
число, то нужно вернуть строку 'Provided value is not a number'.
*/

// Это ничего, что у меня всё везде задано if?

function isLeapYear(num) {
  // Your code should be here
  if (isNaN(num)) {
    return 'Provided value is not a number.';
  } else if (num % 400 == 0) {
    return true;
  } else if (num % 100 == 0) {
    return false;
  } else if (num % 4 == 0) {
    return true;
  } else {
    return false;
  }
}
// These calls are to ensure that it works correctly:
console.log('la-la:', isLeapYear ('la-la')) // =>  'Provided value is not a number'    
console.log('2020:', isLeapYear(2020)) // => true 
console.log('1700:', isLeapYear(1700)) // => false
console.log('2000:', isLeapYear(2000)) // => true
console.log('2015:', isLeapYear(2015)) // => false