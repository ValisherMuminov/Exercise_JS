// ============< 1 >=================

// let user = {};
// user.name = 'Jhon';
// user.surname = 'Smith';
// user.name = 'Pete';
// delete user.name;
// console.log(user);

// ============< 2 >=================

// let schedule = {};
// function isEmpty(schedule) {
//     for (let key in schedule) {
//        // if (schedule.hasOwnProperty(key)) {
//        //     return false
//        // }
//        return false
//     }
//     return true
// }
// console.log(isEmpty(schedule));
// schedule["8:30"] = "get up";
// console.log(isEmpty(schedule));


// ============< 3 >=================

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };
//  function multiplyNumeric(x) {
//     for (let key in x) {
// typeof x[key] === "number" ? x[key] *= 2 : x[key];
//        // if (typeof x[key] === "number") {
//        //     x[key] *= 2;
//        // }
//     }
// };
// multiplyNumeric(menu);
// console.log(menu);

// ============< 3 >=================


// let salaries = {
//     Jhpn: 100,
//     Ann: 160,
//     Pete: 130
// };

// function summa(x) {
//     let sum = 0;
//     for (let key in x) {
//         sum += x[key];
//     }
//     return sum;
// }
// // summa(salaries);
// // console.log(summa(salaries));
// let jamiSumma = summa(salaries);
// console.log(jamiSumma);


// let mashina = {
//     name: 'nexia',
//     color: 'qora',
//     price: 1000
// }
// let key = 'name';
// console.log(mashina.name);
// console.log(mashina['name']);
// console.log(mashina[key]);


// console.log(Object.keys(mashina)); => obj keylari array ichida 
// console.log(Object.values(mashina)); => obj value lari array ichida
// console.log(Object.entries(mashina)); => obj key va value lari alohida alohida array ichida
// console.log(Object.fromEntries(arr)); => Object.entries dan qaytgan qiymatni obj ga ugiradi
// Object.freeze(mashina); => obj ni muzlatadi, delete, create, update ishlamaydi
// Object.seal(mashina); => update buladi, delete va create bulmaydi

// mashina.color = 'Oq'; => update
// mashina.engine = 1.6; => create
// delete mashina.price => delete

// console.log(mashina.name);  => oddiy usul
// console.log(mashina['name']); => ikki boginli, va numeric key bulganda
// console.log(mashina[kalit]); => dynamic usul, shu xolatda uzgaruvchiga obj ni qiymatlarini tenglab access qilsak buladi
// console.log(mashina.name);
// console.log(mashina['name']);
// console.log(mashina['full-name']);
// console.log(mashina[10]);

// let mashina2 = {
//     name: 'Nexia',
// }

// let mashina1 = 'Nexia';
// let mashina2 = 'Nexia';

// let mashina1 = ['nexia'];
// let mashina2 = ['nexia'];

// console.log(mashina1 == mashina2);
// console.log(mashina1 === mashina2);

// match => string metodi, regex bilan ishlaydi, array qiymat qaytaradi
// join('') => array metodi, string qaytaradi
// /[A-Za-z]/g => xarflarni ajratib beradi, g => global