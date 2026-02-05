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
// const input = [
//   { name: "A", city: "Delhi" },
//   { name: "B", city: "Mumbai" },
//   { name: "C", city: "Delhi" },
// ];

// const result = {};

// for (let i = 0; i < input.length; i++) {
//   if (!result[input[i].city]) {
//     result[input[i].city] = [];
//   }
//   if (result[input[i].city]) {
//     result[input[i].city].push(input[i].name);
//   }
// }
// console.log(result);

// 7. **Filter object by values > 50**
//         { a: 20, b: 60, c: 40, d: 90 }
const input = { a: 20, b: 60, c: 40, d: 90 };

const result = Object.fromEntries(
  Object.entries(input).filter(function (item) {
    return item[1] > 50;
  }),
);

console.log(result);
