function findAverage(array) {
  if ((array = [])) {
    return "0";
  } else {
    let a = 0;
    for (let i = 0; i < array.length; i++) {
      a += array[i];
    }
  }
  return a / array.length;
}
let array = [];
console.log(findAverage(array));





// Set/WeakSet, Map/WeakMap

// new Set()

// const arr = [1, 1, 2, 2, 3, 3, 4, 5];
// const set = new Set(arr);
// let obj = {name: 'Farrux'}

// let unique = [...set];

// console.log(unique);

// set.add(100);
// set.add('WBA');
// set.add([10, 20, 30, 40]);
// set.add({name: 'WBA'});
// let exist = set.has(1000);
// set.delete(1);
// set.clear();
// let checksize = set.size;


// let students = new Set();

// students.add('Sardorbek')
//         .add('Jahongir')
//         .add('Valisher')
        
// students.forEach((value) => {
//     console.log(value.toUpperCase());
// })     

// console.log(students[0]);


// new weakSet()

// let students = new WeakSet();

// let sardorbek = {name: 'Sardorbek'};
// let jahongir = {name: 'Jahongir'};

// students.add(sardorbek);
// students.add(jahongir);

// console.log(students);

// new Map()

// let deviceColor = new Map();

// let obj = {
//     name: 'WBA'
// }

// deviceColor.set('phone', 'black');
// deviceColor.set('laptop', 'silver');
// deviceColor.set(function(){} , 'gold');

// console.log(deviceColor);

// deviceColor.forEach((value, key, map) => {
    // console.log(value);
    // console.log(key);
    // console.log(map);
// })

// console.log(deviceColor.keys());
// console.log(deviceColor.values());
// console.log(deviceColor.entries());
// deviceColor.delete('phone');
// deviceColor.clear();
// let exist = deviceColor.has('phone')
// console.log(deviceColor.get('phone'));
// console.log(deviceColor.size);
// console.log(deviceColor.get('phone'));

// new WeakMap()

// const myWeakMap = new WeakMap();

// let obj = {
//     name: 'Hey'
// }

// myWeakMap.set('key', 'hey');
// myWeakMap.set(1, 'hey');
// myWeakMap.clear();
// myWeakMap.set(obj, 'hey');

// console.log(myWeakMap.has(obj));



// Recursion/Recursive function

// function countDown(number){
//   console.log(number);
//   let newNumber = number + 1;
  
//    if(newNumber < 10){
//      countDown(newNumber)
//    }

// }

// countDown(1);

// Closure


// function parent(){
//     let message = 'Hey';
    
//     function child(){
//         console.log(message);
//     }
    
//     child();
    
// }

// parent();





