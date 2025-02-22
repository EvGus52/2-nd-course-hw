

// Задание 1

// const numbs = [1, 5, 4, 10, 0, 3];
// for (let i = 0; i < numbs.length; i++) {
//     console.log(numbs[i]);
//     if (numbs[i] == 10) break;
//     }

// Задание 2

// const numbs = [1, 5, 4, 10, 0, 3];
// const indexNumb = numbs.indexOf(4);
// console.log(indexNumb);

// Задание 3

// let numbs = [1, 3, 5, 10, 20];
// let joinedNumbs = numbs.join(" ");
// console.log(joinedNumbs);

// Задание 4

// const arr = [];

// let arr = [];
// for (let i = 0; i < 3; i++) {
//   arr[i] = [];
//   for (let j = 0; j < 3; j++) {
//     arr[i][j] = 1;
//   }
// }
// console.log(arr);

// Задание 5

// const arr = [1, 1, 1];
// arr.push(2, 2, 2);
// console.log(arr);

// Задание 6

// const arr = [9, 8, 7, 'a', 6, 5];
// arr.sort((a, b) => a - b);
// const filteredArr = arr.filter(item => typeof item === 'number');
// console.log(filteredArr);

// Задание 7
// let arr = [9, 8, 7, 6, 5];
// let userNumb = +prompt('Угадайте число');
// if (arr.includes(userNumb)) {
//     alert("Угадал!");
//   } else {
//     alert("Не угадал!");
//   }

// Задание 8

// let text = 'abcdef';
// let reverseText = text.split('') .reverse() .join('');
// console.log(reverseText);

// Задание 9

// const arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     ];
// const uniteArr = [].concat(...arr);
// console.log(uniteArr);

// Задание 10

// const arr = [3, 7, 2, 9, 5, 1, 8, 4, 6, 10];
// for (let i = 0; i < arr.length - 1; i++) {
//   const current = arr[i];
//   const next = arr[i + 1];
//   const sum = current + next;
//   console.log(`Сумма элементов ${current} и ${next}: ${sum}`);
// }

// Задание 11

// function squareArray(arr) {
//     return arr.map(num => num * num);
// }
//   const num = [2, 5, 8, 10, 6];
//   const squaredNumbs = squareArray(num);
//   console.log(squaredNumbs);

// Задание 12

// function getLenght(arr) {
//     return arr.map(item => item.length);
// }

// console.log(getLenght([`good`, `morning`]));

// Задание 13

// function negativeNumbs(arr) {
//     return arr.filter(item => item < 0);
// }

// console.log(negativeNumbs([1, 5, 8, -8, 0, -3, 10, -10]));

// Задание 14

// function randomNum() {
//     return Math.floor(Math.random() * 10);
// }
// const arr = [];

// for (let i = 0; i < 10; i++) {
//     arr.push(randomNum());
// }
// const evenArr = arr.filter(item => item % 2 === 0);

// console.log(`Исходный массив: ${arr}`);
// console.log(`Массив с четными значениями:: ${evenArr}`);

// Задание 15

// function randomNum() {
//     return Math.floor(Math.random() * 10);
// }
// const arr = [];

// for (let i = 0; i < 6; i++) {
//     arr.push(randomNum());
// }

// console.log(arr);
// console.log(arr.reduce((a, b) => a + b) / arr.length);