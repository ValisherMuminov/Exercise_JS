
// 11 son yaxlitlash
let x = 4.123654
function testtoFixed(x) {
    return x.toFixed(3);
};
console.log(testtoFixed(x));
// 10  butun son
function testparseInt(son) {
    return parseInt(son);
};
console.log(testparseInt(5.12));
// 9 butun son
function testparseInt(son) {
    return Number.parseInt(son);
};
console.log(testparseInt(6.12));
// 8 butun yki butunmas son
function testisInteger(son) {
    return Number.isInteger(son);
};
console.log(testisInteger(6.12));
// 7 qoldiqli son bosayla 1 qoshadi
function testfceil(son) {
  return Math.ceil(son);
}
console.log(testfceil(2.00125));
// 6 butun son
function testfloor(son) {
  return Math.floor(son);
}
console.log(testfloor(2.125));
// 5 yaxlit son
function testround(son) {
  return Math.round(son);
}
console.log(testround(27.5));
// console.log(testround(27.3));
// 4 Cub
function testcbrt(son) {
  return Math.cbrt(son);
}
console.log(testcbrt(27));
// 3 musbat chiqarish
function testabs(son) {
  return Math.abs(son);
}
console.log(testabs(-15));
// 2 ildizdan chiqarish
function testsqrt(son) {
    //return son ** 0.5;
    return Math.sqrt(son);
}
console.log(testsqrt(81));
// 1 darajaga kotarish
function testPow(son, daraja) {
//   return son ** daraja;
     return Math.pow(son, daraja);
}
console.log(testPow(7, 2));
// Functions
// function declaration => hoisting buladi,
// function expression => hoisting bulmaydi,
// arrow function => hoisting bulmaydi, agar gulli qavs {} bolmasa avto return xususiyati mavjud
// !!! Agar function return ga qaytmasa qiymati undefined ga teng buladi
// !!! Function nimani return qilsa, ushanga teng buladi
// parametr => uzgaruvchi desak buladi, function yaratilganda beriladi
// argument => parametrga qiymat sifatida function chaqirilganda beriladi

// Math built in methods

// console.log(Math.pow(3, 2)); => sonni darajaga kotarish, 2ta qiymat oladi, 1-son, 2-nechchi darajaga kotarish
// console.log(Math.sqrt(25)); => sonni ildiz ostida chiqarish
// console.log(Math.cbrt(64)); => sonni uchinchi darajali ildiz ostidan chiqaradi
// console.log(Math.min(20, 45, 2)); => minimum sonni oladi
// console.log(Math.max(20, 45, 2)); => maximum sonni oladi
// console.log(Math.abs(-100)); => faqat musbat son qaytardi
// console.log(parseInt(Math.random() * 100)); => tasodifit son qaytaradi
// console.log(Math.round(10.4)); => sonni yaxlitlaydi, qoldiq qism 5 va undan yuqori bulsa, 1 qushib beradi
// console.log(Math.floor(5.10)); => faqat butun qismni qaytaradi
// console.log(Math.ceil(10.0000001));  => qoldiq qism bulsa, songa bir qushadi

// number methods

// console.log(Number.isInteger(son)); => son butun yoki butun emasligini tekshiradi, boolean qiymat qaytaradi
// console.log(typeof Number.parseInt(son)); => sonni faqat butun qismini qaytaradi va typeof ni xar doim numberga ugiradi
// console.log(parseInt(son)); => sonni faqat butun qismini qaytaradi va typeof ni xar doim numberga ugiradi
// console.log(typeof +son); => faqatgina typeof ni number ga ugiradi
// console.log(typeof +son.toFixed(2)); => sonni yaxlitlaydi, va xar doim typeof string qaytaradi, qoldiq qismdan xoxlagan qismni ajratib olishimiz mumkin
// console.log((son.toFixed()));

// console.log(typeof 12345);
// console.log(10 + 10);
// console.log(10 - 5);
// console.log(10 / 5);
// console.log(10 * 5);
// console.log(11 % 5);
// console.log(2  4);
// console.log(64  (1/2));
// console.log(64 ** 0.5);
// console.log(son++);
// console.log(++son);
// let son = 5;
// son++
// console.log(son++);
// console.log(++son);
// console.log(son); // ->8
