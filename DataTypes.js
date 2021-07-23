let srt = '1';
let bln = true;
let int = 1;

/* 1. Выполнить сложение различных типов
(string+boolean, string+number, number+boolean) */

console.log(srt + bln);
console.log(srt + int);
console.log(int + bln);
 
/* 2. Выполнить умножение различных типов
(string * boolean, string * number, number * boolean)*/

console.log(srt * bln);
console.log(srt * int);
console.log(int * bln);

/* 3. Выполнить деление различных типов
(string/boolean, string/number, number/Boolean)*/

console.log(srt / bln);
console.log(srt / int);
console.log(int / bln);

// 4. Выполнить явное преобразование(number, string, boolean)

console.log(+srt);
console.log(String(bln));
console.log(Boolean(int));

