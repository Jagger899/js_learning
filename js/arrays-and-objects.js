let user = { name: "Іван", age: 30 };

console.log("age" in user);

const user2 = {
  name: "Lily",
  age: 25,
  status: "admin",
};

for (const key in user2) {
  console.log("key:", key);
  console.log("value:", user2[key]);
}

user2.surname = "Karpova";

console.log(user2);

delete user2.status; //delete key

console.log(user2);

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;

for (const key in salaries) {
  sum += salaries[key];
}

console.log(sum);

let menu = {
  width: 200,
  height: 300,
  title: "Моє меню",
};

for (const key in menu) {
  if (typeof menu[key] === "number") {
    menu[key] *= 2;
  }
}

console.log(menu);

// copy objects

const user3 = {
  name: "Микола",
  age: 30,
};

const clone = {}; // новий порожній об'єкт

// давайте скопіюємо в нього всі властивості з user
for (const key in user3) {
  clone[key] = user3[key];
}

// тепер clone є повністю незалежним об'єктом з тим самим вмістом
clone.name = "Петро"; // змінив дані в ньому

// Object.assign

let user4 = { name: "Микола" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// копіює всі властивості з permissions1 та permissions2 в user
Object.assign(user4, permissions1, permissions2);

console.log(user4);

// structuredClone

const user5 = {
  name: "Микола",
  sizes: {
    height: 182,
    width: 50,
  },
};

const clone5 = structuredClone(user5);

clone5.sizes.width = 70;

console.log(user5.sizes.width === clone5.sizes.width);

// взаимосвязанніе обїекті

function marry(man, woman) {
  woman.husband = man;
  man.wife = woman;

  return {
    father: man,
    mother: woman,
  };
}

let family = marry(
  {
    name: "Іван",
  },
  {
    name: "Анна",
  }
);

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    console.log(this.step);
    return this;
  },
};

ladder.up().up().down().showStep().down().showStep();

//constructor

// function User(name,status) {
//   this.name = name;
//   this.isAdmin = false;
//   this.status = status;
// }

// let user6 = new User("Джек", 'user');
// console.log(user6);

function User() {
  console.log(new.target);
}

User(); //undefined

new User();

// Зазвичай конструктори не мають інструкції return. Їх завдання – записати усе необхідне у this, яке автоматично стане результатом.

// Але якщо є інструкція return, то застосовується просте правило:

// Якщо return викликається з об’єктом, тоді замість this буде повернено цей об’єкт.
// Якщо return викликається з примітивом, примітив ігнорується.
// Інакше кажучи, return з об’єктом повертає цей об’єкт, у всіх інших випадках повертається this.

// У наступному прикладі return перезаписує this, повертаючи об’єкт:

function BigUser() {
  this.name = "Джон";

  return { name: "Ґодзілла" }; // <-- повертає цей об’єкт
}

console.log(new BigUser().name); // Ґодзілла, отримали цей об’єкт
// А ось приклад з порожнім return (або ми можемо розмістити примітив після нього, не має значення):

function SmallUser() {
  this.name = "Джон";

  return; // <-- повертає this
}

console.log(new SmallUser()); // Джон
// Зазвичай конструктори не мають інструкції return. Тут ми згадуємо особливу поведінку з поверненнями об’єктів, головним чином, для повноти вивчення мови.

// methods inconstructors

function User2(name, greeting) {
  this.name = name;
  this.greeting = greeting;
  this.sayHi = function () {
    console.log("Моє ім’я: " + this.name);
  };
  this.sayGreat = function () {
    console.log("Greeting is:" + this.greeting);
  };
}

let john = new User2("Джон");
const sally = new User2("Sally", "Hello");
console.log(sally);
john.sayHi();
sally.sayGreat();

let obj = {
  name: "Mango",
  surname: "chech",
};

function A() {
  return obj;
}
function B() {
  return obj;
}

console.log(new A() == new B()); //true

// Створіть функцію-конструктор Calculator, який створює об’єкти з трьома методами:

// read() запитує два значення за допомогою prompt і записує їх у властивості об’єкта з іменами a та b.
// sum() повертає суму цих властивостей.
// mul() повертає результат множення даних властивостей.
// Наприклад:

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

function Calc() {
  this.read = function () {
    this.a = +prompt("a", 0);
    this.b = +prompt("b", 0);
  };

  this.sum = function () {
    return this.a + this.b;
  };

  this.subs = function () {
    return this.a - this.b;
  };

  this.mul = function () {
    return this.a * this.b;
  };

  this.div = function () {
    return this.a / this.b;
  };
}

const calculator = new Calc();
calculator.read();

alert("result is " + calculator.mul());

// Створіть функцію-конструктор Accumulator(startingValue).

// Об’єкт, який він створює повинен:

// Зберігати “поточне значення” у властивості value. Початкове значення має значення аргументу конструктора startingValue.
// Метод read() повинен використовувати prompt для зчитування нового числа та додавати його до value.
// Іншими словами, властивість value – це сума всіх введених користувачем значень разом із початковим значенням startingValue.

// Нижче ви можете подивитись демонстрацію роботи коду:

// let accumulator = new Accumulator(1); // початкове значення 1

// accumulator.read(); // додає введене користувачем значення
// accumulator.read(); // додає введене користувачем значення

// alert(accumulator.value); // показує суму цих значень

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function () {
    this.value += promt("How many plussing? ", 0);
  }
}

let accum = new Accumulator(7);
accum.read;
accum.read;
alert(accum.value);

//Цепь свойств

let user7 = {}; // користувач без властивості "address"

console.log(user7?.address?.street);