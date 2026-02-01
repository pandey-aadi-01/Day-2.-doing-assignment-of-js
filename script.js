// # QUESTIONS FOR JS [ WEEKEND ]: week 2

// TOTAL - 40

// # 🔹 20 basic (Objects + Arrays)

// 1. **Sum values in object arrays**
//     - Input:

//         ```jsx
//       1.  { food: [10, 20, 30], travel: [5, 15], bills: [40, 60] }

// const expenses = {
//   food: [10, 20, 30],
//   travel: [5, 15],
//   bills: [40, 60],
// };

// let total = 0;

// for (let key in expenses) {
//   let arr = expenses[key];

//   for (let i = 0; i < arr.length; i++) {
//     total = total + arr[i];
//   }
// }

// console.log(total); // 180

// 2. **Count word occurrences in array**
//     - Input:

//         ```jsx
//         ["apple", "banana", "apple", "orange", "banana", "apple"]
//         ```const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

// let count = {};   // empty object (box)

// for (let i = 0; i < fruits.length; i++) {
//   let word = fruits[i];

//   if (count[word] === undefined) {
//     count[word] = 1;      /
//   } else {
//     count[word] = count[word] + 1;
//   }
// }

// console.log(count);

// 3. **Swap keys and values of object**
//     - Input:

//         ```jsx
//         { a: "x", b: "y", c: "z" }
//         ```

// const obj = { a: "x", b: "y", c: "z" };

// let swapped = {}; // empty object

// for (let key in obj) {
//   let value = obj[key]; // take value of key

//   swapped[value] = key; // swap
// }

// console.log(swapped);

// 4. **Find the largest value key**
//     - Input:

//         ```jsx
//         { a: 10, b: 50, c: 20 }
//         ``
//

// const obj = { a: 10, b: 50, c: 20 };

// let maxnum = -Infinity;
// let maxKey = "";

// for (let key in obj) {
//   if (obj[key] > maxnum) {
//     maxnum = obj[key];
//     maxKey = key;
//   }
// }

// console.log(maxKey);
