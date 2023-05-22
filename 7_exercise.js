



// ============< 1 >=================
// object keylarini toping

// let obj={
//     id:1,
//     name:"WebBrain"
// }
// function findKey(obj) {
//     for (let key in obj) {
//         console.log(key);
//     }
// };
// findKey(obj);

// ============< 2 >=================
// object valuelarining raqamga tenglarini toping

// let obj={
//     id:1,
//     name:"WebBrain"
// }
// function findNumer(obj) {
//     for (let key in obj) {
//        if (typeof obj[key] === "number") {
//            return key;
//        }
//     }
//     return undefined;
// };
// console.log(findNumer(obj));

// ============< 3 >=================
// object valuelarining boolean tipidagi malumotlrini qaytaring keylari bn biriga

// let obj = {
//   id: 1,
//   name: "WebBrain",
//   offline: true,
//   online: true,
//   individual: false,
// };

// function findBoolean(obj) {
//   let result = {};
//   for (let key in obj) {
//     if (typeof obj[key] === "boolean") {
//       result[key] = obj[key];
//     }
//   }
//   return result;
// }
// console.log(findBoolean(obj));

// ============< 3 >=================
// age Yigindisini  topish
// let person = {
//   id: 1,
//   name: "Odil",
//   age: 78,
//   child: {
//     id: 1,
//     name: "Ali",
//     age: 48,
//     child: {
//       id: 1,
//       name: "Umar",
//       age: 20,
//     },
//   },
// };

// function ageYigindisi(obj) {
//   let totalAge = obj.age;
//   if (obj.child) {
//     totalAge += ageYigindisi(obj.child);
//   }
//   return totalAge;
// }
// console.log(ageYigindisi(person));

// ============< 3 >=================
//  talaba bazaga kirishi kk shunday funksiya yarating u parol va name ni jonatsin. agar parol bn name bazadagi
//  parol bn name ga togri kelsa consoleda hush kelibsiz aks holda parol yoki name  xato chiqsin

let person = {
  id: 1,
  name: "Valisher",
  surname: "Muminov",
  ielts: 5.5,
  student: true,
  parol: 101,
};

function kirish(parol, name) {
  if (parol === person.parol && name === person.name) {
    console.log("Hush kelibsiz!");
  } else {
    console.log("Parol yoki ism xato!");
  }
}

kirish(101, "Valisher");

















































// methods in obj
// this
// obj clone
// spread
// destructure => qayta strukturalash

// this => global window objectiga teng
// this => agar obj ichidagi function da kelsa, usha obj ni uziga teng buladi
// this => arrow function da mavjud emas, global window ga teng bulib qoladi
// let clone = Object.assign({}, obj1); => obj dan clone(copy) olib alohida reference xam yaratadi, shallow clone qiladi(nested bulmagan)
// let clone = structuredClone(obj1); => obj dan clone(copy) olib alohida reference xam yaratadi, deep clone qiladi(nested bulgan)


// methods in obj
// this
// obj clone
// spread
// destructure => qayta strukturalash

// this => global window objectiga teng
// this => agar obj ichidagi function da kelsa, usha obj ni uziga teng buladi
// this => arrow function da mavjud emas, global window ga teng bulib qoladi
// let clone = Object.assign({}, obj1); => obj dan clone(copy) olib alohida reference xam yaratadi, shallow clone qiladi(nested bulmagan)
// let clone = structuredClone(obj1); => obj dan clone(copy) olib alohida reference xam yaratadi, deep clone qiladi(nested bulgan)