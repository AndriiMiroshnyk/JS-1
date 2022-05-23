"use strict";

//№1
let array1 = ["a", "b", "c"];
let array2 = [1, 2, 3];

let concatArray1 = array1.concat(array2);
let concatArray2 = array2.concat(array1);

console.log(concatArray1);
console.log(concatArray2);

//№2
array1.push(1, 2, 3);

console.log(array1);

//№3
let unsortedArray = [3, 4, 1, 2, 7];
unsortedArray.sort();

console.log(unsortedArray);

//№4
const reverse = (array) => {
    let newArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    return newArray;
};

const data = [1, 2, 3];
console.log(reverse(data));

//№5
console.log(typeof(null)); //object