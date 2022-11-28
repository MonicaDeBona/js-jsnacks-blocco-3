// Continuare a chiedere all'utente un numero tra 1 e 10 fino a quando l'utente non inserisce il valore corretto

let userNumber = parseInt(prompt('Inserisci un numero tra 1 e 10'));

const myNum = 7;

// continuo a chiedere il numero all'utente finchè non inserisce il 7

while (userNumber !== myNum) {
    userNumber = parseInt(prompt('Inserisci un numero tra 1 e 10'));
}

console.log(userNumber);


