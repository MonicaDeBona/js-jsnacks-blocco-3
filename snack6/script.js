// Crea una funzione che dato un array, calcoli la somma dei suoi elementi.

let myArray = ['ciao','3', '9', 3, 7, 67, 11, 28];
console.log(myArray);

function getSumOfArrayElement(myArray) {

    let somma = 0;
    for (let i = 0; i < myArray.length; i++) {

        const convertedNumber = parseInt(myArray[i], 10);

        if (!Number.isNaN(convertedNumber)){
            somma += convertedNumber;
        }
    }
    return somma;
}
console.log(getSumOfArrayElement(myArray));