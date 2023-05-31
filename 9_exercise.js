
///////////////////////////////////////////////////////////////////////////////////////////
// // const onDelete = (id) => {}; onDelete(5) => 5- id li malumot o'chib ketishi kerak

// let users = [
//   { id: 1, name: "Sardorbek" },
//   { id: 2, name: "Jaxongir" },
//   { id: 3, name: "Zuhridin" },
//   { id: 4, name: "Hamidjon" },
//   { id: 5, name: "Otabek" },
// ];
// // const onDelete = (input) => {
// //     return users.filter((value) => value.id === input);
// //     return users.filter((value) => value.id !== input);
// // }
// const onDelete = (id) => {
//     // return users.filter((value) => value.id === id); // id ni obberadi
//     return users.filter((value) => value.id !== id);
// }
// console.log(onDelete(3));

//////////////////////////////////////////////////////////////////////////////////////
//  arraydan min va max ni toping // for loop ishlatish mumkin emas

// let arr = [4, 10, 888, 7, 1, 99, 100];
// console.log(arr.sort((a, b) => a - b)); //  sort minmax
// console.log(arr.sort((a, b) => b - a)); //  sort maxmin
// console.log(arr.sort((a, b) => a - b).slice(-1)); //  max sort
// console.log(arr.sort((a, b) => b - a).slice(-1)); //  min sort
// console.log(arr.sort((a, b) => a - b)[3]); // indexdagi qiymatni oladi
// console.log(arr.sort((a, b) => b - a)[0]);

//////////////////////////////////////////////////////////////////////////////////////

let cars = [
{ id: 1, year: 1998, engine: 1, name: "Tiko" },
{ id: 2, year: 2005, engine: 1.2, name: "Matiz" },
{ id: 3, year: 2010, engine: 1.6, name: "Gentra" } ,
{ id: 4, year: 2010, engine: 1.5, name: "Cobalt" },
{ id: 5, year: 2012, engine: 2, name: "Malibu" },
{ id: 6, year: 2000, engine: 1.2, name: "Damas" },
{ id: 7, year: 2018, engine: 2.4, name: "Tracker" }
];
// let filtered = cars.filter((value) => value.year < 2000);
// let filtered = cars.filter((value) => value.year > 2010);
// let sorted = cars.sort((a, b) => b.engine - a.engine);
// let sorted = cars.sort((a, b) => b.year - a.year);
// let sorted = cars.sort((a, b) => a.name.localeCompare(b.name));

// let filtered = cars.filter((value) => value.year < 2000);
// let mapped = filtered.map((value) => {
//   return { ...value, status: "Eski" };
// });
// let filtered = cars.filter((value) => value.year < 2000).map((value) => {
//   return { ...value, status: "Eski" }
// });
// console.log(filtered);
let mapped = cars.map((value) => {
    if (value.year >= 2000 && value.year <= 2010) {
        console.log({...value, status: 'Orta'});
    }
});


// let arr = [[12, 23, null,32, 34, null,  null, null]];
// let filteredNum = arr.filter((value) => value !== null).sort();
// let filteredNull = arr.filter((value) => value === null);
// let result = filteredNum.concat(filteredNull);

// console.log(result);

// let array = [12, 23, null, 34, null, 32, null, null];

// let sorted = [...array].sort((a, b) => {
//   if (a === null && b === null) {
//     return 0;
//   } else if (a === null) {
//     return 1;
//   } else if (b === null) {
//     return -1;
//   } else {
//     return a.index - b.index
//   }
// });
// console.log(sorted);
