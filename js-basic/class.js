"use strict";

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  speak() {
    console.log(`내 이름은 ${this.name} 입니다`);
  }
}

const minji = new Person("조민지", 31);
console.log(minji.name);
console.log(minji.age);
minji.speak();

console.clear();
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this._age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    // if (value < 0) {
    //   throw Error("age can not be nagative");
    // }
    return (this._age = value < 0 ? 0 : value);
  }
}

const user1 = new User("steve", "Jabs", -1);

class Experiment {
  publicField = 2;
  #privateField = 9;
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

class Article {
  static publisher = "Dream Coding";

  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);

console.log("article publisher", Article.publisher);
Article.printPublisher();

class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}

class Triangle extends Shape {
  //오버라이딩
  draw() {
    super.draw();
    console.log("triangle draw");
  }
  getArea() {
    return (this.width * this.height) / 2;
  }

  toString() {
    return `Triangle , color: ${this.color}`;
  }
}

const rectangle = new Rectangle(20, 20, "blue");
const triangle = new Triangle(20, 20, "red");
console.clear();
console.log();
rectangle.draw();
triangle.draw();
console.log(rectangle.getArea());
console.log(triangle.getArea());

console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
console.log(triangle.toString());
