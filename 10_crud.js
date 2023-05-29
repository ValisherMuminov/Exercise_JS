let cars = [
  { id: 1, year: 1998, engine: 1, name: "Tiko" },
  { id: 2, year: 2005, engine: 1.2, name: "Matiz" },
  { id: 3, year: 2010, engine: 1.6, name: "Gentra" },
  { id: 4, year: 2010, engine: 1.5, name: "Cobalt" },
  { id: 5, year: 2012, engine: 2, name: "Malibu" },
  { id: 6, year: 2000, engine: 1.2, name: "Damas" },
  { id: 7, year: 2018, engine: 2.4, name: "Tracker" },
];

// CREATE
// const onCreate = (car) => {
// // console.log(car);
//     // cars.push(car);
//     cars = [...cars, {id: cars.length + 1, ...car}]
// }
// onCreate({ year: 2000, engine: 1.6, name: 'Nexia' });
// onCreate({ year: 2023, engine: 3, name: "Mers" });
// console.log(cars);

// READ
// cars.map((value) => {
//     console.log(value);
// });
// let mapped = cars.map((value) => {
//     return value
// });
// console.log(mapped);

// UPDATE
const onUpdate = (car) => {
  // let updated = cars.map(((value) => value));
  // let updated = cars.map((value) => value.id === car.id ? 'update' : 'not update');
  // let updated = cars.map((value) => value.id === car.id ? {...value, engine: 2.5, name: 'Cherry'} : value );
  let updated = cars.map((value) =>
    value.id === car.id ? { ...value, [car.keyType]: car.value } : value
  ); // realni dinamic updated

  console.log(updated);
};
// onUpdate({ id: 7, keyType: 'name', value: 'Mers'});
// onUpdate({ id: 7, keyType: "engine", value: 3 });
onUpdate({ id: 7, keyType: "year", value: 2023 }); // realni dinamic updated

// console.log(cars);

// DELETE
// const onDelete = (ids) => {
//     // return cars.filter((value) => value.id !== ids)
//     return cars.filter(function (value) {
//         return value.id !== ids
//     })
// }
// console.log(onDelete(3));
