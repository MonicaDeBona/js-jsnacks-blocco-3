// Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.

let minArr = [
    1,
    2,
    3,
];

let majArr = [
    6,
    7,
    8,
    9,
    10,
];


while (minArr.length !== majArr.length) {

    if (minArr.length < majArr.length) {
        minArr.push(Math.floor(Math.random() * 10));

    } else {
        majArr.push(Math.floor(Math.random() * 10));
    }
}

console.log(minArr);
console.log(majArr);

