

// sozni kopaytir 10ga,
// let str = "Webbrain";
// function str10(str) {
//     return str.repeat(10);
// }
// console.log(str10(str));
// --------------------------------
// web ni IT ga almashtir
// let str = "webBrain";
// function ozg(str) {
//     str = str.repeat(10);
//     str = str.replace('webBrain', 'ITBrain');
//     return str
// }
// console.log(ozg(str));


// --------------------------------

// let str2 = "WeBbraIN";
// function kesish(str2) {
//   let result = "";
//   for (let i = 0; i <= str2.length - 1; i++) {
//     if (str2[i] == "e" || str2[i] == "b" || str2[i] == "r" || str2[i] == "a") {
//       continue;
//     }
//     result += str2[i];
//   }
//   return result;
// };
// let kesishResult = kesish(str2);
// console.log(kesishResult);
//------------------------------------



// ================================
// # ni qavslarga aylantir
// let str = "#fozil#web#brain#";
// function qavs(str) {
//   let arr = str.split("");
//   let son = 0;
//   let arr1 = arr.map((ele) => {
//     if (ele === "#") {
//       son++;
//       if (son % 2 === 0) {
//         return (ele = ")");
//       } else {
//         return (ele = "(");
//       }
//     } else {
//       return ele;
//     }
//   });
//   return arr1.join("");
// }
// let result = qavs(str);
// console.log(result);

// console.log(str.substr(0, 3)); => kesib beradi, 2 ta qiymat oladi, 1-index, 2-length
// console.log(str.slice(1, 5)); =>  kesib beradi, 2 ta qiymat oladi, 1-index, 2-index
// console.log(str.substring(3, 5)); => kesib beradi, 2 ta qiymat oladi, 1-index, 2-index
// ================================
// Min, Max son topish
// let number = "5158452";
// function findMinMax(number) {
//   let numbers = number.split("").map(Number);
//   let min = Math.min(...numbers);
//   let max = Math.max(...numbers);
//   return { min, max };
// }
// console.log(findMinMax(number));
// --------------------------------------
// let number = "5158452";
// function findMinMaxx(number) {
//   let arr = number.split("");
//   let arr1 = arr.map((ele) => {
//     return parseInt(ele);
//   });
//     let min = arr1[0];
//     let max = arr1[0];
//   arr1.map((ele) => {
//     if (max < ele) {
//         max = ele;
//     }
//     if (min > ele) {
//         min = ele;
//     }
//       return { min, max };
//   });
//   console.log(min, max);
// }
// findMinMaxx(number);

// ======================================
// Kabisa yilini topish

// function findYear(year) {
//     if (year % 4 == 0) {
//         return "Kabisa yili";
//     } else {
//         return "Kabisa yili emas";
//     }
// }
// console.log(findYear(2000));

//======================================
// Ozgaruvchilar qiymatini almashtirish

// let str1 = "web";
// let str2 = "brain";
// function withReplace(str1) {
//     if (str1.replace) {
//         return str2;
//     } else {
//         return str1;
//     }
// //   return str1.replace ? str2 : str1;
// }
// let result = withReplace(str1);
// console.log(result);
//--------------------------------
// let str1 = 'web';
// let str2 = 'brain';
// function withReplace(str1) {
//     return str1.replace(str1, str2);
// }
// let result = withReplace(str1);
// console.log(result);
//---------------------------------
// let str1 = 'web';
// let str2 = 'brain';
// let newStr = str1;
// str1 = str2;
// str2 = newStr;
// console.log(str2);
// console.log(str1);

//=======================================
// Oxirgi xarfni chiqarish

//  function strEndsWith(str1) {
//   return str1.endsWith("l");
// }
// // let resStr1 = "Fozim";
// let resStr1 = "Fozil";
// let response = strEndsWith(resStr1);
// console.log(response);
// -----------------------------------
// let str = 'fozil';
// console.log(str.includes('l'));
// console.log(str.endsWith('l'));
// console.log(str.trim().endsWith("l")); // white space bolsa
// -----------------------------------
// let str = "     foziL          ";
// // console.log(str.toLowerCase().endsWith('l'));
// // console.log(str.trim().toLowerCase()[str.length - 1] === 'l');
// let newStr = str.trim().toLowerCase();
// console.log(newStr[newStr.length - 1] == 'l');
// console.log(newStr[newStr.length - 1]);
//=======================================

// String:
// index => xar doim 0 dan boshlanadi
// length => xar doim 1 dan boshlanadi

// let str = 'hello world';
// let str = 'webbrain';
// let str = 'webbrain \n academy'; => new line
// let str = 'webbrain \t academy'; => tab
// let str = 'webbrain \r academy'; => right

// console.log(str.substr(0, 3)); => kesib beradi, 2 ta qiymat oladi, 1-index, 2-length
// console.log(str.slice(1, 5)); =>  kesib beradi, 2 ta qiymat oladi, 1-index, 2-index
// console.log(str.substring(3, 5)); => kesib beradi, 2 ta qiymat oladi, 1-index, 2-index
// console.log(str.toLowerCase()); => kichkina xarfga ugiradi
// console.log(str.toUpperCase()); => katta xarfga ugiradi
// console.log(str.trim().length); => white space ni uchiradi, faqat 2 yondagi
// console.log(str.startsWith('W')); => birinchi xarfni tekshiradi, boolean qiymat qaytaradi
// console.log(str.endsWith('y')); => oxirgi xarfni tekshiradi, boolean qiymat qaytaradi
// console.log(str.padStart(12, 'a')); => string boshidan malumot qushadi, 1-qiymat: nechta qushish, 2-qiymat nima qushish
// console.log(str.padEnd(70, '.')); => string oxiridan malumot qushadi, 1-qiymat: nechta qushish, 2-qiymat nima qushish
// console.log(str.replace('brain', 'IT')); => stringni uzgartirish, 1-nimani uzgartirish, 2-nimaga uzgartirish
// console.log(str.repeat(10)); => stringni takrorlash
// console.log(str.concat(str2, 'IT maktab')); => qushish
// console.log(str.includes('bbrain')); => boolean qaytardi, bor yuqligin tekshiradi
// console.log(str.indexOf('b')); => malum qiymatni indexini korsatadi
// console.log(str.lastIndexOf('b')); => oxirida kelgan elementni indexini korsatadi
// console.log(str.charAt(3)); => malum indexdagi elementni qaytardi

// let str = `hello       world`;
// // let str = `hello
// // world`;
// console.log(str.length);

//let str = 'hello';
// //console.log(str[0]);
// console.log(str[1]);
// console.log(str[2]);
// console.log(str[3]);
// console.log(str[4]);
// console.log(str.length); // ->5
// console.log(str[str.length - 1]); // -> oxirgi harf olib beradi O
