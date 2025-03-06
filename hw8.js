
// Игра № 5 «Камень, ножницы, бумага»

function rockPaperScissors() {
    
    let userChoiceDigit = prompt('Выберите:\n1 - Камень\n2 - Ножницы\n3 - Бумага');
    if (userChoiceDigit === null) {
      console.log('Игра отменена.');
      return;
    }
    while (!['1', '2', '3'].includes(userChoiceDigit)) {
      userChoiceDigit = prompt('Некорректный выбор. Пожалуйста, выберите:\n1 - Камень\n2 - Ножницы\n3 - Бумага');
      if (userChoiceDigit === null) {
        console.log('Игра отменена.');
        return;
      }
    }
    const userChoice = convertDigitToChoice(userChoiceDigit);
    const choices = ['Камень', 'Ножницы', 'Бумага'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
    let result;
    if (userChoice === computerChoice) {
      result = 'Ничья';
    } else if (
      (userChoice === 'Камень' && computerChoice === 'Ножницы') ||
      (userChoice === 'Ножницы' && computerChoice === 'Бумага') ||
      (userChoice === 'Бумага' && computerChoice === 'Камень')
    ) {
        result = 'Ты победил, молодец!';
    } else {
        result = 'Ты проиграл! Продолжай играть, у тебя все получится!';
    }
  
    alert(`Результат: ${result}\n\nТы выбрал: ${userChoice}\n\nКомпьютер выбрал: ${computerChoice} `);
    const playAgain = confirm('Поиграем еще?');
    if (playAgain) {
        rockPaperScissors();
    } else {
        console.log('Игра отменена.');
        return;
    }
  }
  
  function convertDigitToChoice(digit) {
    const choices = ['Камень', 'Ножницы', 'Бумага'];
    return choices[digit - 1];
  }

// Задание 1

// const people = [
//    { name: 'Глеб', age: 29 },
//    { name: 'Анна', age: 17 },
//    { name: 'Олег', age: 7 },
//    { name: 'Оксана', age: 47 }
// ];

// console.log(people.sort((a, b) => a.age - b.age));

// Задание 2

// function isPositive(number) {
//     return number > 0;
// }
// function isMale(person) {
//     return person.gender === 'male';
// }
// function filter(array, ruleFunction) {
//     const result = [];

//     for (let i = 0; i < array.length; i++) {
//         if (ruleFunction(array[i])) {
//             result.push(array[i]);
//         }
//     }

//     return result;
// }

// console.log(filter([3, -4, 1, 9], isPositive));

// const people = [
//    {name: 'Глеб', gender: 'male'},
//    {name: 'Анна', gender: 'female'},
//    {name: 'Олег', gender: 'male'},
//    {name: 'Оксана', gender: 'female'}
// ];

// console.log(filter(people, isMale));

// Задание 3

// function printCurrentDate() {
//     console.log(new Date().toLocaleString());
// }

// const intervalId = setInterval(printCurrentDate, 3000);

// setTimeout(() => {
//     clearInterval(intervalId);
//     console.log("30 секунд прошло");
// }, 30000);

// Задание 4

// function delayForSecond(callback) {
//     setTimeout(() => {
//     callback();
//     }, 1000);
   
// }

// delayForSecond(function () {
//    console.log('Привет, Глеб!');
// })

// Задание 5

// Функция delayForSecond через 1 секунду пишет в консоль 
// «Прошла одна секунда», а затем вызывает переданный колбэк
// function delayForSecond(cb) {
//     setTimeout(() => {
//         console.log('Прошла одна секунда');
//         if(cb) {  cb(); }
//     }, 1000)
// }
// // Функция sayHi выводит в консоль приветствие для указанного имени
// function sayHi (name) {
//     console.log(`Привет, ${name}!`);
// }
// // Код выше менять нельзя
// // Нужно изменить код ниже:
// delayForSecond(() => sayHi(`Глеб`));