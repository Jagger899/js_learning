class Box {
  // name = "Jagger";
  _role = 'user';

  constructor(name, age, role) {
    console.log('inizialization of class');
    this.name = name;
    this.age = age;
    this.role = role;
  }
  hi() {
    console.log(`hi, ${this.name}, my age in ${this.age}`);
  }

  set role(value) {
    this._role = value;
    console.log(`now you are ${this._role}`);
  }

  get role() {
    return this.age;
  }
}

let myBox = new Box();
console.log(myBox)
myBox.name = "Timmi";
console.log(myBox)
console.log(myBox.hi())

let myBox2 = new Box();
myBox2.name = 'Stones';

myBox2.hi();

let myBox3 = new Box('Boris', 46, 'admin');
myBox3.hi();

myBox3.role = 'Admin';
myBox3.hi();

console.log(myBox3 instanceof Box)