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
var random10 = Math.floor(Math.random() * 10);
var random30 = Math.floor(Math.random() * 30);

for (j = 0; j < squadre.length; j++) {
    squadre.punti_fatti = random10;
    squadre.falli_subiti = random30;
}
console.log(squadre)

// Infine creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
