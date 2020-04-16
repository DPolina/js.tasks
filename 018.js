/*
18. Написать функцию, которая принимает строку со словами str и 
возвращает массив, где каждый элемент массива является словом из 
переданной строки в нижнем регистре. Например, на вход
пришло 'Hello World in an Array", а на выходе должно быть: 
['hello', 'world', 'in', 'an', 'array']. Для переводе строки в 
нижений регистр нужно использовать функцию toLowerCase(), 
например str = str.toLowerCase();
*/

function splitStrToArr(str) {
  // Your code
  if (typeof str != 'string') {
    return 'Parameter should be a string.';
  }
  // const arr = str.toLowerCase().split(' ');
  const arr = [];
  let word = '';
  str = str.toLowerCase();
  for (let idx = 0; idx < str.length; idx++) {
    if (str[idx] == ' ') {
      arr.push(word);
      word = '';
    } else {
      word = word + str[idx];
    }
  }
  arr.push(word);

  return arr;
}

console.log('[1]:', splitStrToArr([1])); // Parameter should be a string
console.log('1:', splitStrToArr(1)); // Parameter should be a string  
console.log('\'Hello\':', splitStrToArr('Hello')); // ['hello']
console.log('\'Hello World  in an  Array\':', splitStrToArr('Hello World in an Array')); //  ['hello', 'world', 'in', 'an', 'array']