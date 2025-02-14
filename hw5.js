// Задание игра для сайта («Угадай число»)

const randomNumber = Math.floor(Math.random() * 100) + 1;
function guessNumber() {
    let userGuess = 0;
    let attempts = 0;
    
    while (true) {
        userGuess = prompt('Угадайте число от 1 до 100:');
        if (isNaN(userGuess)) {
            alert(`Пожалуйста, введите число!`);
            continue;
        }
        attempts++;

        if (userGuess < randomNumber) {
            alert(`Загаданное число больше.`);
        } else if (userGuess > randomNumber) {
            alert(`Загаданное число меньше.`);
        } else {
            alert(`Поздравляю! Вы угадали число за ${attempts} попыток.`);
            break;
        }
    }
}

// Задание 1

// function minNumber(a, b) {
//     if (a <= b) {
//       return a;
//     } else {
//       return b;
//     }
//   }
// let result = minNumber(8, 4);
// console.log(`Меньшее из двух чисел равняется ${result}`);

// Задание 2

// function checkEvenNum(n) {
//     if (n % 2 == 0) {
//         return 'Число четное';
//     }   else {
//         return 'Число нечетное';
//     }
//   }
// let result = checkEvenNum(8);
// console.log(result);

// Задание 3

// let squareNum = (n) => {
//     let result = n ** 2;
//     console.log(`Квадрат числа равен ${result}`);
//     return result;
// }

// squareNum(7);

// Задание 4

// function checkAge() {
//     let age = Number(prompt("Введите ваш возраст"));

//     if (age < 0) {
//         alert(`Вы ввели неправильное значение`);
//     } else if (age >= 0 && age <= 12) {
//         alert(`Привет, друг!`)
//     } else {
//         alert(`Добро пожаловать!`)
//     }   
//   }
  
//   checkAge();

// Задание 5

// function mult(a, b) {
//     if (isNaN(a) || isNaN(b)) {
//         return `Одно или оба значения не являются числом`;
//     } else {
//         const result = a * b;
//         return result;
//     }
// }

// let num1 = prompt('Введите первое число');
// let num2 = prompt('Введите второе число');
// let result = mult(num1, num2);
// console.log(`Результат умножения: ${result}`);

// Задание 6

// function cubeNum() {
//     let userNum = prompt('Введите число');
//     if (isNaN(userNum)) {
//         return `Переданный параметр не является числом`;
//     } else {
//         let result = userNum ** 3;
//         return `${userNum} в кубе равняется ${result}`;
//     }
// }
    
// let result = cubeNum();
// console.log(result);

// Задание 7

const circle1 = {
    radius: 5,

    // Метод для вычисления площади круга
    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    },

    // Метод для вычисления периметра окружности
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
};

const circle2 = {
    radius: 10,

    // Метод для вычисления площади круга
    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    },

    // Метод для вычисления периметра окружности
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
};

console.log(circle1.getArea());
console.log(circle1.getPerimeter()); 
console.log(circle2.getArea()); 
console.log(circle2.getPerimeter());