// Snack 2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
var squadre = [
    {
        nome: "Paperopoli United",
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: "Hellas Gotham-ese",
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: "Amestris-ese",
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: "Neo Tokyo-3-ese ",
        punti_fatti: 0,
        falli_subiti: 0
    },
];

// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate inizialmente a 0.
// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
var finalArray = [];
for (i = 0; i < squadre.length; i++) {
    squadre[i].punti_fatti = getRandomNumber(1, 10);
    squadre[i].falli_subiti = getRandomNumber(1, 10);
    //push dei nomi dentro array finale;
    var nomiSquadre = squadre[i].nome;
    console.log(nomiSquadre)
    finalArray.push(nomiSquadre)
    //push dei falli subiti dentro array finale
    var falli_subiti_squadre = squadre[i].falli_subiti;
    console.log(falli_subiti_squadre)
    finalArray.push("Ha subito: " + falli_subiti_squadre + " falli.")
}
console.log(squadre)
console.log(finalArray)
// Infine creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

