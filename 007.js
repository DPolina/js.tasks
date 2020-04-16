/*
7. Написать функцию, которая принимает строку, и возвращает другую строку, 
котороая содержит только числа, если они есть в первой строке. Например, 
если на входе 'abc', то на выходе ''; если на входе 'ab34cd97sw', то на
выходе должно быть '3497'. Если на входе '1234', то на выходе '1234'. 
Если на входе не строка, а например число, или null, то сказать что 
'A string is expected'.
*/

function onlyDigits(str) {
  // You code should be here 
  if (typeof str != 'string') {
    return 'A string is expected.';
  }
  let digits = '';
  for (let idx = 0; idx < str.length; idx++) {
    if (isNaN(str[idx]) == false) {
      digits = digits + str[idx];
    }
  }
  return digits;
}
// These calls are to ensure that it works correctly:
console.log('3:', onlyDigits(3)) // => 'A string is expected'     
console.log('[4,3]:', onlyDigits([4,3])) // => 'A string is expected'   
console.log('\'ab34cd97sw\':', onlyDigits('ab34cd97sw')) // => '3497' 
console.log('\'1234\':', onlyDigits('1234')) // =>  '1234'
console.log('\'\':', onlyDigits('')) // =>  ''