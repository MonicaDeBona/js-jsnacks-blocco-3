/*
Data una lista di 20 numeri diversi.
generiamo una lista secondaria di
10 numeri presi randomicamente dalla lista, diversi tra loro.
*/
const startingList = [ 1, 2 ,3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
console.log(startingList);

function getRandom(startingList, num) {
    const newArray = [...startingList].sort(() => 0.5 - Math.random());
    return newArray.slice(0, num);
}
console.log(getRandom(startingList, 10)); 

