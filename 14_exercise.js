// Module js
// IIFE => immidietely invoked function expression

// syntax

// arrow syntax
// (()=> {
//     // your code
//     console.log('Hey IIFE');
// })()

// expression syntax
// (function(){
//     // your code
// // console.log('Hey IIFE');
// })()

// declaration syntax
// (function myIIFE(){
// your code
//    console.log('Hey IIFE');
// })()

// prototype

// const user = {
//     name: 'Sardorbek',
//     age: 25,

//     greeting(){
//         console.log('Hello');
//     }
// }

// const user2 = {
//     name: 'Valisher'
// }

// const str = 'Hey';
const str = new String("Hey");

// String.prototype.concatination = function(){
//     console.log('String method created');
// }

// const arr = [1, 2, 3, 4, 5];
// const arr2= [1, 2, 3, 4, 5];

// Array.prototype.yangiMethod = function(){
//     console.log('Yangi array metodi');
// }

// let num = 10;

// const num = new Number(10);

// Number.prototype.matematika = function(){
//     console.log(5 + 5);
// }

// Object.prototype.getStatus = function(){
//     console.log('Student');
// }

//  Js => multi paradigm programming language
//  OOP => object oriented programming => Encapsulation, Abstraction, Inheritance, Polymorphism
//  FP => functional programming

// class(Inheritance) => reusable object yaratish uchun template(shablon);

class Students {
  constructor(name, age, status) {
    this.name = name;
    this.age = age;
    this.status = status;
  }

  showInfo() {
    console.log(`Name: ${this.name} Yosh: ${this.age} Status: ${this.status}`);
  }
}

const student1 = new Students("Sardorbek", 25, "Developer");
const student2 = new Students("Valisher", 27, "Student");
const student3 = new Students("Hamidjon", 28, "Developer");
const student4 = new Students("Diyora", 25, "Teacher");
const student5 = new Students("Shaxboz", 27, "Mentor");
// student5.showInfo();

// console.log(typeof student1);
console.log(typeof Students);
