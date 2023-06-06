//Arrays -obj
const list = [1, 2, 3, 4, 5, 12, 20, 100];
const list_1 = [`salom`, `xayr`];
let list_2 = [12, 15, `and`, `or`]; // JSda arraylar son va stringladan tashkil topishi m/n                                                             JAVA son or harf bolishi shart degan joylari bor
let list_x = [`olma`, `anor`, `behi`];

const a = list_x[0];
console.log(a);

const b = list_x[2];
console.log(b);

const size = list_x.length;
console.log(size);
//-----------------------------------
// Methods: push, pop, shift, unshift, ...
let list_y = [`olma`, `anor`, `behi`];
list_y.push(`uzum`); // Push-array oxiridan element qoshadi
console.log(list_y);

const c = list_y.pop(); // Pop-array oxiridan element ayiradi
console.log(c);
console.log(list_y);
//----------------------------------
list_y.unshift(`gilos`); // Unshift-array boshidan element qoshadi
console.log(list_y);

const f = list_y.shift(); // Shift-array boshidan element ayiradi
console.log(f);
console.log(list_y);
// ----------------------------------
console.log("oldin", list_y);
list_y.sort();
console.log("keyin", list_y);

let listsort = [3, 2, 5, 4, 1];
listsort.sort(); // Sort- arrayni tartiblab beradi !old son boyicha!
console.log(listsort);
//------------------------------------
let list_z = [`olma`, `anor`, `behi`];
list_z[3] = "appelsin"; // Index boyicha element qoshish
console.log(list_z);

list_z[0] = "lemon"; // Index boyicha element ornini oladi
console.log(list_z);
// bosh qiymatlarni tashab , qoyib ketadi va 10indexga qiymatini qoyadi shularni oldini olish uchun array methodladan foydalaniladi
list_z[10] = "misol: meva";
console.log(list_z);
//------------------------------------
// ARRAY => OBJECT reference yani arrayni adresi ozgarmasa bold.Uni ichki qiymatlarini ozg.sa boladi!
const list_obj = ["may", "eprel", "mart"];
console.log(list_obj);
list_obj[0] = "yanvar";
list_obj.push("fasl");
console.log(list_obj);
// list_obj = ["aprel"]; mumkinmas assigment to const variable!

// Arrayni Property: length (propertylani oxirida qavs bolmidi)
console.log(list_obj.length);
// Arrayni Methods: push(), pop(), shift(), unshift(), ...
//                  toString(), join(),
//                  sort(), reverse(),
let list_s = ["kush", "yoz", "qish"];

const s = list_s.toString();
console.log(s);
//const ss = list_s.join(); string bn bir xil
//const ss = list_s.join(""); bitta stringda
const ss = list_s.join("-");
console.log(ss);

//--------++++++sort()
const numbers = [1, 5, 4, 16];
numbers.sort();
console.log(numbers);
numbers.sort(function (n, m) {
  return n - m;
});
//numbers.sort(function(n, m) {return m-n});
console.log(numbers);

//---------+++++++reverse()
numbers.reverse();
console.log(numbers);

//========================================
// ITERATION METHOD -xar bir methodni qolga olib beradi

// ----------forEach() koop ishlatamiz
let listA = ["kuz", "yoz", "qish"];
listA.forEach((ele) => {
  console.log("ele:", ele);
});

let numberN = [1, 5, 4, 6];
let numberM = [];
numberN.forEach((ele) => {
  //console.log("ele", ele);
  numberM.push(ele * ele);
});
console.log("forEach:", numberM);

//----------- map() koop ishlatamiz
let numbeN = [1, 5, 4, 6];
let numbeM = numberN.map((ele, index) => {
  //(ele*ele));
  // {console.log("ele", ele);
  //return (ele*ele);});
  return ele * index;
});
console.log("map::", numbeM);

//------------ -------filter() koop ishlatamiz
let numbN = ["kuz", "yoz", "qish"];
let numbM = numbN.filter((ele, index) => {
  //return ele;           //xar biri
  //return ele !== "kuz"; //not ...ni emas
  //return ele === "kuz"; // aniq ...ni ober
  console.log(`Man eleMan ${ele} va mening indexim ${index}`);
  return ele;
});
console.log("filter:", numbM);

// -----------------reduce() kop ishlatilmaydi
let nbrN = [1, 5, 4, 6];
let new_summary = nbrN.reduce((total, ele) => {
  return total + ele;
});
console.log("REDUCE new_summary:", new_summary);
// every() keremas
// each()  keremas
