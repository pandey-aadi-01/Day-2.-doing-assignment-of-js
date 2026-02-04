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
// const data = {
//   fruits: ["apple", "banana"],
//   veggies: ["carrot", "pea"],
// };

// const result = [];

// for (let key in data) {
//   result.push(...data[key]);
// }

// console.log(result);
//  6.Group people by city
const input = [
  { name: "A", city: "Delhi" },
  { name: "B", city: "Mumbai" },
  { name: "C", city: "Delhi" },
];

const result = {};

for (let i = 0; i < input.length; i++) {
  if (!result[input[i].city]) {
    result[input[i].city] = [];
  }
  if (result[input[i].city]) {
    result[input[i].city].push(input[i].name);
  }
}
console.log(result);
