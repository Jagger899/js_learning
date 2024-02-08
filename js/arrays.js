// Существует два варианта синтаксиса для создания пустого массива:

let arr = new Array();
let arr2 = [];

let fruits = ["Apple", "Orange", "Plum"];
console.log(fruits.at(-1)); // последний є-т массива
console.log(fruits[fruits.length - 1]);

fruits.pop(); //remove last element
console.log(fruits);

fruits.push("ananas"); //add last elemetn
console.log(fruits);

fruits.shift(); // remove first el
console.log(fruits);

fruits.unshift("melon"); //add firstelement
console.log(fruits);

for (const fruit of fruits) {
  console.log(fruit);
}

for (const key in fruits) {
  console.log(key); //output index of array
  console.log(fruits[key]);
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrix[0][matrix[0].length - 2]);

const array2 = [1, 2, 3];
console.log(array2.toString());

const array3 = [4, -5, 0, 10, 11, -1];

function getMaxSubSum(arr) {
  let maxSum = 0; // если элементов не будет - возвращаем 0

  for (let i = 0; i < arr.length; i++) {
    let sumFixedStart = 0;
    for (let j = i; j < arr.length; j++) {
      sumFixedStart += arr[j];
      maxSum = Math.max(maxSum, sumFixedStart);
    }
  }

  return maxSum;
}

console.log(getMaxSubSum(array3));

function getMaxSubSum2(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) {
    // для каждого элемента массива
    partialSum += item; // добавляем значение элемента к partialSum
    maxSum = Math.max(maxSum, partialSum); // запоминаем максимум на данный момент
    if (partialSum < 0) partialSum = 0; // ноль если отрицательное
  }

  return maxSum;
}

console.log(getMaxSubSum2(array3));

// arr.splice(start[, deleteCount, elem1, ..., elemN])
// Он изменяет arr начиная с индекса start: удаляет deleteCount элементов и затем вставляет elem1, ..., elemN на их место. Возвращает массив из удалённых элементов.

let arr3 = ["Я", "изучаю", "JavaScript", "очень", "долго"];

// arr3.splice(0, 1); // начиная с индекса 1, удалить 1 элемент
console.log(arr3);

arr3.splice(0, 3, "Давай", "танцевать");
console.log(arr3);

arr3.splice(2, 0, "сложный", "танец");

console.log(arr3);

let arr4 = ["t", "e", "s", "t"];
console.log(arr4.slice(0, 2)); // index no in

//concat

let arr5 = [1, 2, 3, 4];
let arr6 = [5, 6, 7, 8];
console.log(arr6.concat(arr5));

// У методов arr.indexOf и arr.includes одинаковый синтаксис и они делают по сути то же самое, что и их строковые аналоги, но работают с элементами вместо символов:

// arr.indexOf(item, from) ищет item начиная с индекса from и возвращает номер индекса, на котором был найден искомый элемент, в противном случае -1.
// arr.includes(item, from) ищет item начиная с индекса from и возвращает true, если поиск успешен.
// Обычно эти методы используются только с одним аргументом: искомым item. По умолчанию поиск ведется с начала.

let arr7 = [1, 0, false];

console.log(arr7.indexOf(1, false));
console.log(arr7.includes(0));
console.log(arr7.lastIndexOf(0)); // ищет с конца

//find

let users = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 3, name: "Маша" },
];

let user = users.find((item) => item.id === 1);
console.log(user, user.name); //возвращает елемент

let users2 = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 3, name: "Маша" },
];

// возвращает массив, состоящий из двух первых пользователей
let someUsers = users.filter((item) => item.id < 3);

console.log(someUsers); //возвращает массив по условию

//map исли нужно вернуть массив счем-то другим

let lengths = ["Бильбо", "Гэндальф", "Назгул"].map((item) => item.length);
console.log(lengths);

//sort

let arr8 = [1, 2, 15, 45, 4, -7, 112];

console.log(arr8.sort());

let countries = ["Österreich", "Andorra", "Vietnam"];

console.log(countries.sort((a, b) => (a > b ? 1 : -1)));

//reverse на месте

let arr9 = [1, 2, 3, 4, 5];
arr.reverse();

console.log(arr9);

//split разбивает строку на  массив по идентификатору
let names = "Вася, Петя, Маша";

let arr10 = names.split(", ");

for (const item of arr10) {
  console.log(`message sent:${item}`);
}

let arr11 = ["Вася", "Петя", "Маша"];

let str = arr11.join("_");

console.log(str);

// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// camelize("list-style-image") == "listStyleImage";

function camelize(string) {
  let currentStr = string;

  let arrCurrentString = currentStr.split("-");

  const newArrCurrentString = arrCurrentString.map((item, index) => {
    if (index !== 0) {
      return item[0].toUpperCase() + item.slice(1);
    }
    return item;
  });

  return newArrCurrentString.join("");
}

console.log(camelize("rev-and"));

// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.

// Функция должна возвращать новый массив и не изменять исходный.

// Например:

let arr12 = [5, 3, 8, 1, 12, 47, 4];

// let filtered = filterRange(arr, 1, 4);

function filteredArray(array, a, b) {
  const newArray = array.filter((item) => item >= a && item <= b);

  return newArray;
}

console.log(filteredArray(arr12, 2, 13));

//reduce

const numbers = [1, 4, 32, 65, 87, 90, 254, 100, -8];

function getAverage(array) {
  const result = array.reduce((acc, item) => {
    return acc + item;
  }, 0);

  return Math.round(result / array.length);
}

console.log(getAverage(numbers));

const users3 = [
  {
    name: "Mango",
    jedi: "true",
  },
  {
    name: "Sofi",
    jedi: "false",
  },

  {
    name: "Dodge",
    jedi: "true",
  },

  {
    name: "Gabriel",
    jedi: "true",
  },

  {
    name: "Elefp",
    jedi: "false",
  },
];

const countJedi = function (array) {
  // let count = 0;

  const result = array.reduce((count, user) => {
    if (user.jedi === "true") {
      count++;
    }

    return count;
  }, 0);

  return result;
};

console.log(countJedi(users3));

const getJedi = function (array) {
  const result = array.reduce((jedies, user) => {
    if (user.jedi === "true") {
      jedies.push(user.name);
    }

    return jedies;
  }, []);

  return result;
};

console.log(getJedi(users3));

const documents = [
  {
    content: "Ты был мне как брат! Я любил тебя!",
    author: "Obi-Wan Kenobi",
    date: "2017-01-17 07:13:07",
  },
  {
    content: "База повстанцев находится на Дантуине.",
    author: "Leia Organa",
    date: "1999-02-19 16:56:11",
  },
  {
    content:
      "Страх открывает доступ к темной стороне! Страх рождает гнев, гнев рождает ненависть, ненависть — залог страданий.",
    author: "Yoda",
    date: "2019-11-27 21:33:56",
  },
];

const composeDocuments = function (array) {
  const result = array.reduce(
    (object, document) => {
      object.content = object.content + " " + document.content;
      object.authors.push(document.author);
      if (!object.date || new Date(object.date) <= new Date(document.date)) {
        object.date = document.date;
      }
      return object;
    },
    {
      content: "",
      authors: [],
      date: null,
    }
  );

  return result;
};

console.log(composeDocuments(documents));

const fletchers = ["mango", "looby", "chery", "looby", "mango"];

console.log(new Set([...fletchers]));
