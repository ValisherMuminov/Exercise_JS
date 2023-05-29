
// ============< 1 >=================
// // terminal => B

// let str = 'ABBACACC';
// let arr = [];

// for (let i = 0; i < str.length; i++) {
//     // console.log(arr, str[i]);
//     // console.log(arr.includes(str[i]));
//     if (arr.includes(str[i])) {
//         console.log(str[i]);
//         break
//     }
//     arr.push(str[i]);
// }

// ============< 2 >=================
// search qilish kerak

let users = [
  { id: 1, name: "Sobir" },
  { id: 1, name: "Nodir" },
  { id: 1, name: "Bobir" },
  { id: 1, name: "Odil" }
];
const onSearch = (input) => {
    let newArr = [];
    for (let i = 0; i < users.length; i++) {
        // if (users[i].name.includes(input)) {
        if (
          users[i].name.includes(input.toLowerCase()) ||
          users[i].name.includes(input.toUpperCase())
        ) {
          newArr.push(users[i]);
        }
    }
    console.log(newArr);
}
onSearch('O');

// ============< 3 >=================

// let users = [
// { id: 1, year: 1998, engine: 1, name: "Tiko" },
// { id: 2, year: 2005, engine: 1.2, name: "Matiz" },
// { id: 3, year: 2010, engine: 1.6, name: "Gentra" } ,
// { id: 4, year: 2010, engine: 1.5, name: "Cobalt" },
// { id: 5, year: 2012, engine: 2, name: "Malibu" },
// { id: 6, year: 2000, engine: 1.2, name: "Damas" },
// { id: 7, year: 2018, engine: 2.4, name: "Tracker" }
// ];
// // 2000 yildan oldinga mashinalar ro'yhatini chiqaring
// let yilOldingi = users.filter(user => user.year < 2000);
// console.log(yilOldingi);

// // 2010 yildan keyingi chiqgan mashinalar ro'yhatini chiqaring
// let yilKeyingi = users.filter((user) => user.year > 2010);
// console.log(yilOldingi);

// // engine kuchiga qarab malumotlarni sartiforfka qiling
// let sortEngineKuchi = users.sort((a, b) => b.engine - a.engine);
// console.log(sortEngineKuchi);

// // chiqarilgan yiliga qarab malumotlarni sartiforfka qiling
// let sortYear = users.sort((a, b) => b.year- a.year);
// console.log(sortYear);

// // isimlarini Alphabet tarzda sartiforfka qiling
// let sortName = users.sort((a, b) => a.name.localeCompare(b.name));
// console.log(sortName);

// // 2000 yildan oldin chiqgan mashinalarga status: eski malumot qo'shing
// users.forEach((user) => {
//   if (user.year < 2000) {
//     user.status = "tugagan:)";
//   }
// });
// console.log(users);

// // 2000~2010 yilda chiqgan mashinalarga status: o'rta malumot qo'shing
// users.forEach((user) => {
//   if (2000 < user.year < 2010) {
//     user.status = "O'rtacha";
//   }
// });
// console.log(users);

// // 2010~2022 yildan oldin chiqgan mashinalarga status: yangi malumot qo'shing
// users.forEach((user) => {
//   if (2010 < user.year < 2022) {
//     user.status = "Yangi";
//   }
// });
// console.log(users);


// ============< 4 >=================
// const onDelete = (id) => {}; onDelete(5) => 5- id li malumot o'chib ketishi kerak
// let users = [
//   { id: 1, name: "Sardorbek" },
//   { id: 2, name: "Jaxongir" },
//   { id: 3, name: "Zuhridin" },
//   { id: 4, name: "Hamidjon" },
//   { id: 5, name: "Otabek" },
// ];
// const onDelete = (id) => {
//   let index = users.findIndex(item => item.id === id);

//   if (index !== -1) {
//     users.splice(index, 1);
//     console.log(` ${id}id li malumot o'chdi `);
//   } else {
//     console.log(`${id}id li malumot topilmadi`);
//   }
// };
// onDelete(5);
// console.log(users);

// ============< 5 >=================
//  arraydan min va max ni toping // for loop ishlatish mumkin emas

// var arr = [4, 10, 888, 99, 100];
// var min = arr[0];
// var max = arr[0];
// for (var i = 1; i < arr.length; i++) {
//   if (arr[i] < min) {
//     min = arr[i];
//   }
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }
// console.log("max" + max + ", min - " + min);

// ============< 6 >=================
// // function parametrida bolgan qiymatni arradan olib tashla

// let arr = ["olma", "nok", "banan", "olma", "nok", "tarvuz"];
// function deleteMeva(nomi) {
//   var count = 0;
//   var index = arr.indexOf(nomi);
//   while (index !== -1) {
//     arr.splice(index, 1);
//     count++;
//     index = arr.indexOf(nomi);
//   }
//   console.log(arr);
// }
// deleteMeva("olma");
//----------------------------------
// var arr = ["olma", "nok", "banan", "olma", "nok", "tarvuz"];

// function deleteMeva(nom) {
//   var count = 0;

//   for (var i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] === nom) {
//       arr.splice(i, 1);
//       count++;
//     }
//   }

//   console.log(arr);
// }

// deleteMeva("olma");

// ============< 7 >=================












































// console.log(arr.at(-1));
// Array.isArray => array data type ni tekshiradi
// let toArray = str.split('');
// let toReverse = toArray.reverse();
// let toJoin = toReverse.join('');
// console.log(parseInt(num.toString().split('').reverse().join(''))); reversed number
// console.log(arr.concat(arr2, {name: 'Vlisher'}, 100)); => array ga malumot qushish
// console.log(arr.join('')); => arrayni stringga ugirish
// slice => arraydan malumot kesib olish, 2 ta qiymat oladi, 1-index, 2-length, splice dan farqi 'asosiy arraga' tasir qilmaydi, ctrl+C
// splice => arraydan malumot kesib olish, 2 ta qiymat oladi, 1-index, 2-length, slice dan farqi 'asosiy arraga' tasir qiladi, ctrl+X
// console.log(str.split('')); => stringni arrayga ugiradi
// split('') => stringni arrayga ugiradi
// reverse() => arrani teskarisiga ugiradi
// arr.push('Hamidjon', 'Example'); => array oxiridan malumot qushish
// arr.pop(); => array oxiridan bitta malumot uchirish
// arr.unshift('Example', 'Hamidjon') => array boshidan malumot qushish
// arr.shift(); => array boshidan bitta malumot uchirish

// console.log(arr.sort( (a, b) => a.localeCompare(b)));
// console.log(nums.sort());
// console.log(nums.sort( (bir, ikki) => bir - ikki));
// console.log(nums.sort( (bir, ikki) => ikki - bir));
// map => qiymatni update qila olamiz, va return ga qaytadi
// forEach => qiymatni update qila olmaymiz, va return ga qaytmaydi
// filter => shart oladi, true ga teng bulgan qiymatlarni arrayga solib qaytaradi
// str[i] => value
// i => index
// str => array


// let finding = arr.findIndex((value)=> value === 'Damir'); => elementni indexini topib beradi
// let finding = arr.find((value) => value !== 'Example'); => malum elemntni topib beradi
// let check = arr.every((value)=> value > 13); => xamma shart true bolsagina true qaytaradi(&&)
// let check = arr.some((value) => value > 73); => bitta true xolat bulsa, true qaytaradi(||)
// let filling = arr.fill('100'); => berilgan qiymat bilan arrayni tuldirib beradi
// let sum = arr.reduce((initial, total) => initial + total, 0); => arraydagi umumiy sonlar yigindisini topadi
// let flatting = arr.flat(Infinity) => nested arraydagi elementlarni bitta arrayga soladi
// let spreading = [...arr, 'Tohirbek']; => clone, copy, => arrayni olib ustida amal bajarish
