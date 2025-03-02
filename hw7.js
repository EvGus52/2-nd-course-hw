// Задание 1

// const text = 'js';
// console.log(text.toLocaleUpperCase());

// Задание 2

// function filterStr(array, str) {
//     const lowerCaseStr = str.toLowerCase();
//     const filteredArray = array.filter((str) => str.toLowerCase().startsWith(lowerCaseStr));
//     return filteredArray;
// }

// const myArray = ['Орел', 'Слон', 'обезъяна', 'бегемот', 'Олень', 'собака', 'кот'];
// const myStr = "о";

// const result = filterStr(myArray, myStr);
// console.log("Результат:", result);


// Задание 3

// let num = 32.58884;
// console.log(Math.floor(num), Math.ceil(num), Math.round(num));

// Задание 4

// const numbs = [52, 53, 49, 77, 21, 32];
// const numbsMin = Math.min(...numbs);
// const numbsMax = Math.max(...numbs);
// console.log(`Минимальное значение - ${numbsMin}`);
// console.log(`Максимальное значение - ${numbsMax}`);

// Задание 5

// function randomNum() {
//     const randomNum = Math.floor(Math.random() * 10) + 1;
//     console.log(randomNum);
//   }
// randomNum();

// Задание 6

// function genRandomNumbs(numb) {
//     const randomNumbs = [];
//     const arrayLength = Math.floor(numb / 2);
//     for (let i = 0; i < arrayLength; i++) {
//     randomNumbs.push(Math.floor(Math.random() * (numb + 1)));
//     }
    // return(randomNumbs);
//   }

//   genRandomNumbs(10);


// Задание 7

// function randomNum(max, min) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// randomNum(10, 2);

// Задание 8

// let todayDate = new Date();
// console.log(todayDate);

// Задание 9

// const currentDate = new Date();
// const futureDate = new Date(currentDate);
// futureDate.setDate(currentDate.getDate() + 73);
// console.log(`Дата через 73 дня: ${futureDate}`);

// Задание 10

// function formatDate(date) {
//     const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
//     const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

//     const day = date.getDate();
//     const month = months[date.getMonth()];
//     const year = date.getFullYear();
//     const dayOfWeek = days[date.getDay()];
//     const hours = String(date.getHours()).padStart(2, '0');
//     const minutes = String(date.getMinutes()).padStart(2, '0');
//     const seconds = String(date.getSeconds()).padStart(2, '0');
//     return `Сегодня: ${day} ${month} ${year} ${dayOfWeek} Время: ${hours}:${minutes}:${seconds}`;
    
// }

// const date = new Date()
// const formattedDate = formatDate(date);
// console.log(formattedDate);

// Игра № 3 «Переверни текст»

function reverseWord(word) {
    return word.toUpperCase().split('').reverse().join('');
}
function flipText() {
    const userWord = prompt("Введите слово:");
    const regex = /^[A-Za-zА-Яа-я\s]+$/;
    if (userWord === null) {
        alert("Вы не ввели текст. Попробуйте ещё раз!");
        return; 
    }
    if (!regex.test(userWord)) {
        alert("Ошибка: ввод должен содержать только буквы.");
        return;
    }
    const reversedWord = reverseWord(userWord);
    alert(`Мы перевернули слово ${userWord}, теперь это - ${reversedWord}`);
}

// Игра № 4 «Викторина
const quiz = [
    {
        question: "Какой цвет небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];

function quizGame() {
let correctAnswers = 0;

for (let i = 0; i < quiz.length; i++) {
    const question = quiz[i];
    const userAnswer = parseInt(prompt(`${question.question}\n${question.options.join('\n')}`));

        if (userAnswer === question.correctAnswer) {
            correctAnswers++;
            alert(`Ответ верный!`);
    
        } else {
        alert(`Ответ неверный!`);
        }
    }

alert(`Вы правильно ответили на ${correctAnswers} из ${quiz.length} вопросов. Спасибо за игру!`);   
}




