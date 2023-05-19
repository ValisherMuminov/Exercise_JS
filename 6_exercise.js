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
//         if (schedule.hasOwnProperty(key)) {
//             return false
//         }
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
// function multiplyNumeric(x) {
//     for (let key in x) {
//         if (typeof x[key] === "number") {
//             x[key] *= 2;
//         }
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