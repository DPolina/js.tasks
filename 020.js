/*
20. Написать функцию, которая на вход принимает числовой массив arr, а на 
выходе возвращает массив, у которого все нули находятся в конце. Например, 
на входе есть массив [1,2,0,3,0,5], а на выходе должен быть массив [1,2,3,5,0,0]. 
Обрати внимание, что порядок чисел в результирующем массиве роли не играет. 
Главное. чтобы все нули были в конце. Есть два решения: одно с перестановками 
чисел в переданном массие, или создании ногово массива. Надо решить сделать 
два варианта
*/

function moveZerosToEnd(arr) {
  // Your code
  if (arr instanceof Array == false) {
    return 'Parameter should be an array';
  }
  const marr = [];
  // const zarr = [];
  // for (let idx = 0; idx < arr.length; idx++) {
  //   if (isNaN(arr[idx]) == true) {
  //     return `arr[${idx}] is not a number. All elements of the array should be numbers.`;
  //   }
  //   if (arr[idx] != 0) {
  //     marr.push(arr[idx]);
  //   } else {
  //     zarr.push(arr[idx]);
  //   }
  // }
  // const mzarr = marr.concat(zarr);
  
  // let count = 0;
  // for (let idx = 0; idx < arr.length; idx++) {
  //   if (isNaN(arr[idx]) == true) {
  //     return `arr[${idx}] is not a number. All elements of the array should be numbers.`;
  //   }
  //   if (arr[idx] != 0) {
  //     marr.push(arr[idx]);
  //   } else {
  //     count++;
  //   }
  // }
  // for (let gdx = 0; gdx < count; gdx++) {
  //   marr.push(0);
  // }
  // return marr;

  let end = arr.length - 1;
  while (arr[end] == 0 && end >= 0) {
    end--;
  }

  for (let idx = 0; idx < arr.length; idx++) {
    if (isNaN(arr[idx]) == true) {
      return `arr[${idx}] is not a number. All elements of the array should be numbers.`;
    }
    if (idx >= end) {
      break;
    }
    if (arr[idx] == 0) {
      let num = arr[end];
      arr[end] = arr[idx];
      arr[idx] = num;
      
      do {
        end--;
      }  while (arr[end] == 0 && end >= 0)
    }
  }
  return arr;

}

console.log('\'a\':',  moveZerosToEnd('a')); // Parameter should be an array
console.log('[1,2,\'a\', 0]:',  moveZerosToEnd([1,2,'a', 0])); // arr[2] is not a number. All elements of the array should be numbers.
console.log('[1,2,0,3,5,0,0,4]:',  moveZerosToEnd( [1,2,0,3,5,0,0,4] )); // [1,2,3,5,4,0,0,0]
console.log('[1,2,0,3,5,0,4,0]:',  moveZerosToEnd( [1,2,0,3,5,0,4,0] )); // [1,2,3,5,4,0,0,0]
console.log('[1,2,0,3,0,5,4,0]:',  moveZerosToEnd( [1,2,0,3,0,5,4,0] )); // [1,2,3,5,4,0,0,0]
console.log('[1,2,3,5,4]:',  moveZerosToEnd( [1,2,3,5,4] )); // [1,2,3,5,4]
console.log('[0,0,0]:',  moveZerosToEnd( [0,0,0] )); // [0,0,0]
console.log('[0,0,1,0]:',  moveZerosToEnd( [0,0,1,0] )); // [1,0,0,0]