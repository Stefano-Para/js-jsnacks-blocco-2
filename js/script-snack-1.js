// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
var biciclette = [
    {
        nome: 'super01',
        peso: 7,
    },
    {
        nome: 'super02',
        peso: 11,
    },
    {
        nome: 'super03',
        peso: 15,
    },
    {
        nome: 'super04',
        peso: 9,
    },
];
console.log(biciclette);

var arrayPesi = [];

// Stampare a schermo la bici con peso minore.
for (var i = 0; i < biciclette.length; i++) {
    var pesi = biciclette[i].peso;
    arrayPesi.push(pesi);
    console.log(pesi);
}
console.log(arrayPesi);
//sort
arrayPesi.sort(function(a, b) {
  return a - b;
});
// stamp
console.log("Il peso minore è: " + arrayPesi[0]);


