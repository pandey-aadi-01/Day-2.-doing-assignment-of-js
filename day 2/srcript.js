// 3. **Swap keys and values of object**

// const obj={ x: "a", y: "b", z: "c" };

// let swapped = { } ;

// for ( let key in obj)
// {
//  let values =obj[key];

//  swapped[ values]= key ;
// }

//     console.log(swapped);

// const obj = { x: "a", y: "b", z: "c" }

// let swapped = {};

// for ( let key in obj){
//     let values = obj[key];

//     swapped[values] =key;
// }

// console.log(swapped)
// *Flatten object of arrays into one array**
const data = {
  fruits: ["apple", "banana"],
  veggies: ["carrot", "pea"],
};

const result = [];

for (let key in data) {
  result.push(...data[key]);
}

console.log(result);
https://github.com/pandey-aadi-01/Day-2.-doing-assignment-of-js
