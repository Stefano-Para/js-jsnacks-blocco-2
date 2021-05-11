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
for (var i = 0; i < biciclette.length; i++) {
    var pesi = biciclette[i].peso;
    arrayPesi.push(pesi);
    // provo a pushare l'intero oggetto
    // trovato il peso minore a riga 43 allora:
    if (pesi == 7) {
        console.log("Avendo scoperto riga 42 il peso minore è 7, posso affermare che la bicicletta più leggera è: ")
        console.log(biciclette[i])
    }
}
console.log("Array come esce: " + arrayPesi)

//sort
arrayPesi.sort(function(a, b) {
  return a - b;
});
console.log("Array sorted: " + arrayPesi)
// stamp del peso minore. 
console.log("Il peso minore è: " + arrayPesi[0]);
// stamp del nome della bicicletta con peso minore è a riga 32


