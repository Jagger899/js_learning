let message = "привіт"; //string
message = 123456;
console.log(message);

// let name = "Іван";

// вбудована змінна
// alert(`Привіт, ${name}е!`); // Привіт, Іване!

// вбудований вираз
// alert(`результат: ${1 + 2}`); // результат: 3



let n = 123; //number
n = 12.345;
console.log(n);

const bigInt = 1234567890123456789012345678901234567890n; //bigInt
console.log(bigInt)

//boolean 
let nameFieldChecked = true; // так, ім’я було перевірене
let ageFieldChecked = false; // ні, вік не був перевіреним

console.log(2 === 3);

//null

let age = null;
console.log(age)

//object

const user = {
  name: 'Kostya',
  age: 23,
  satus: 'admin',
};

//symbol 

console.log(typeof Symbol('id'));

let name = "Ілля";

// alert( `привіт ${1}` ); // 1

// alert( `привіт ${"name"}` ); // name

// alert( `привіт ${name}` ); // Ілля

let age2 = prompt('Скільки вам років?', 100);

alert(`Вам ${age2} років!`)

let isBoss = confirm("Ви бос?");

alert(isBoss);

let question = prompt('What is your name', 'petya');

alert(`your name is ${question}`);