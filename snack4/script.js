// Prendere due array della stessa lunghezza e generarne un terzo, prendendo alternativamente gli elementi da uno e dall'altro es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

let firstArray = [10, 25, 367];
let secondArray = [4, 77, 655];
let mixArray = [];

console.log(firstArray);
console.log(secondArray);

for (let i = 0; i < firstArray.length; i++) {
    mixArray.push(firstArray[i], secondArray[i])
}

console.log(mixArray);