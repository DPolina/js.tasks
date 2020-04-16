/*
20.  Написать функцию, которая принимает на входе числовой массив, а на выходе она
должна вернуть отсортированный массив. Например, на входе дано [1,5,3,8,5], а на
выходе должно быть [1,3,5,5,8]. Сортировку нужно выполнить по пузырьковому алгоритму.

Суть алгоритма пузырьковой сортировки состоит в сравнении соседних элементов и их
обмене, если они находятся не в надлежащем порядке. Неоднократно выполняя это
действие, мы заставляем наибольший элемент "всплывать" к концу массива. Следующий
проход приведет к всплыванию второго наибольшего элемента, и так до тех пор, пока
после n-1 итерации массив не будет полностью отсортирован.
*/

function bubbleSort(arr) {
  // Your code
  if (arr instanceof Array == false) {
    return 'array is expected.';
  }
  if (arr.length == 0) {
    return 'The array is empty.';
  }
  for (let idx = 0; idx < arr.length; idx++) {
    if (isNaN(arr[idx])) {
      return `arr[${idx}] = ${arr[idx]} is not a number`
    }
  }
  let swap = false;
  let counter = 0;
  do {
    swap = false;
    for (let idx = 0; idx < arr.length - 1; idx++) {
      if (arr[idx] > arr[idx + 1]) {
        let num = arr[idx];
        arr[idx] = arr[idx + 1];
        arr[idx + 1] = num;
        swap = true;
      }
      counter++;
    }
  } while (swap == true);

  return arr;
}

module.exports = bubbleSort;
