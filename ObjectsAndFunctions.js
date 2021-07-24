/*1. Создать объект car, добавить к нему свойство 
color со значением 'черный' */

let car = {
    color: 'black',
};

// 2. Изменить свойство color объекта car на 'зеленый'

car.color = 'green';

/* 3. В объект car добавить свойство power, которое является 
функцией и выводит в консоль мощность двигателя*/

car.power = function (horsePower) {
    console.log(horsePower + ' hp');
};

/* 4. На склад принимают груши и яблоки, напишите функцию, 
которая возвращает результат сложения количества принятых 
груш и яблок*/

function calcSumApplesAndPears (apples, pears) {
    return apples + pears;
}

/* 5.  В терминале оплаты сохранено ваше имя, напишите функцию 
для определения имени в терминале(если вы ввели ваше имя, то привет + имя, 
если нет, то нет такого имени)*/

let user = 'Dzmitry';

function sayHi (name) {
    if (name === user) {
        console.log ('Hello ' + name);
    } else {
        console.log('No such name');
    }
}

// 6. Напишите функцию вычисления типа аргумента и вывод типа в консоль

function typeOfOutput (value){
    console.log(typeof(value));
}

// 7. Напишите функцию, которая определяет является ли число простым или нет

function isPrime(num) {
    for (var i = 2; i < num; i++) {
      if (num % i === 0) return false;
      break;
    }
    return num > 1;
  };
