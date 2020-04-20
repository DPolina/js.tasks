/*
24. Написать функцию, которая принимает на вход отсортированный числовой массив arr,
и число num, которое нужно найти. На выходе нужно вернуть позицию найденого числа
или -1, если число не найдено. Поиск проводить путем половиноого деления. То есть,
идем в середину массива и сравниваем число из массива с переданным числом. Если
число num < arr[length/2], то проверяем число находящееся в позии arr[length/2/2], иначе в
верхней половине массива. То есть каждый раз берем половину той части массива
которую проверяли до этого.
Пример:
Дан массив: [1,3,5,6,8,10,23,25,50], длина 9, и ищем число 3
Шаги:
1. Берем позицию pos = Math.floor(9/2) = 4. Проверяем там число (8) с num (3)
2. Раз num(3) < arr[pos], то берем следующий интервал позиций 0 - Math.floor(4/2) = 0 - 2;
3.  Берем позицию pos = Math.floor(4/2) = 2. Проверяем там число (5) с num (3).
4. Раз  arr[pos] (5) < num (3), то  берем следующий интервал позиций 0 - Math.floor(2/2) = 0 - 1;
5.  Берем позицию pos = Math.floor(4/2) = 1. Проверяем там число (3) с num (3). Оно
равно. Возвращаем 1, что означает что число 3 находится в массиве в позиции 1.
*/

function findNumber(arr, num) {
  // Your code
  if (isNaN(num)) {
    return 'num should be a number.';
  }
  if (arr instanceof Array == false) {
    return 'The array is expected.';
  }
  if (arr.length == 0) {
    return 'The array is empty.';
  } 
  for (let idx = 0; idx < arr.length; idx++) {
    if (isNaN(arr[idx])) {
      return `arr[${idx}] = ${arr[idx]} is not a number.`;
    }
  }
  // [1,3,5,6,8,10,23,25,50], длина 9, и ищем число 0
  let startPos = 0;
  let endPos = arr.length - 1;
  do {
    const pos = startPos + Math.floor((endPos - startPos) / 2);
    if (arr[pos] < num) {
      startPos = pos + 1;
    } else if (arr[pos] > num) {
      endPos = pos - 1;
    } else {
      return pos;
    }
  } while (startPos <= endPos);

  return -1;
}
  
module.exports = findNumber;