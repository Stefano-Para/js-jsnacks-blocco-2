// Snack 3
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). 
var finalArray = [];

function getSliced (array, a, b) {
    finalArray = array.slice(a, b - 1);

    if (a<b) {
    return finalArray;
    }
    else {
        alert("Errore.")
    }
}

var libreria = [1,2,3,4,5,6,7,8,9];
var slice = getSliced(libreria, 2, 8);
console.log(slice);
// La funzione restituirà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.