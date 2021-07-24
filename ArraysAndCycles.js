/* 1. Дан массив состоящий из названий фильмов, 
выполните перебор массива с выводом в консоль 
названия каждого фильма */

let movies = ['The Godfather', 'Goodfellas','The Dark Knight',
'Star Wars', 'Alien', 'Seven', 'Bonnie and Clude'];

for (let movie of movies) {
    console.log( movie );
}

/* 2. Дан массив производителей автомобилей, 
преобразовать массив в строку и обратно в массив*/

let carModel = ['Audi', 'Honda', 'Volkswagen', 'Toyota',
'Renault', 'Mazda', 'Kia', 'Ford'];

let str = carModel.join(', ');
carModel = str.split(', ');

/* 3. Дан массив имен ваших знакомых, добавить 
к каждому элементу массива слова hello*/

let friends = ['Dzmitry', 'Sergey', 'Pavel', 'Makar',
'Valentin', 'Sasha'];

friends = friends.map( friend => 'Hello ' + friend);

// 4. Преобразовать числовой массив в Boolean

let numbers = [1,6,7,8,3,4,5,6]; 

let booleanArray = numbers.map(number => Boolean(number));

// 5. Отсортировать массив [1,6,7,8,3,4,5,6] по убыванию

let sortArray = numbers.sort( (a, b) => a - b ).reverse();

// 6. Отфильтровать массив [1,6,7,8,3,4,5,6] по значению >3

let filtrArray = numbers.filter(number => number > 3);

/* 7. Написать функцию, которая принимает два параметра - 
массив и число и выводит индекс элемента массива равный числу*/

function getIndex (arr, int) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == int) return i;
    }
}

/* 8. Реализовать цикл, который будет выводить число а, 
пока оно не станет меньше 10*/

let a = 59;

for (let i = a; i >= 10; i--) {
    console.log(i);
};

// 9. Реализовать цикл, который выводит в консоль простые числа

let n = 100;

nextPrime:
for (let i = 2; i <= n; i++) { 
  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextPrime; 
  }
  console.log( i ); 
}

// 10. Реализовать цикл, который выводит в консоль нечетные числа

for (let i = 1; i <= n; i++) {
    if (i % 2 != 0) console.log( i );
}