/* 1. В try catch конструкцию завернуть код: console.log(a), let a = 3. 
И вывести ошибку – ‘let перед использованием нужно объявить’.*/

try {
	console.log( a );
	let a = 3;
} catch (err) {
	console.log ('let перед использованием нужно объявить');
}

// 2. При выполнении 1/0  выводить ошибку 'на ноль делить нельзя'

try {
	let b = 1 / 0;
	if (b === Infinity) throw new Error ('на ноль делить нельзя');
} catch (e) {
	console.log (e.message);
}