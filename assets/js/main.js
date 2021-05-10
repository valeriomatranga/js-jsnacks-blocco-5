/* Snack 1:
Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine. */

var zucchina = [
    {
        varieta: "genovese",
        peso: 200,
        lunghezza: 15
    },

    {
        varieta: "napoletana",
        peso: 300,
        lunghezza: 40
    },

    {
        varieta: "ligure",
        peso: 150,
        lunghezza: 10
    },

    {
        varieta: "siciliana",
        peso: 400,
        lunghezza: 60
    },

    {
        varieta: "veneta",
        peso: 500,
        lunghezza: 80
    },

    {
        varieta: "calabrese",
        peso: 350,
        lunghezza: 50
    },

    {
        varieta: "toscana",
        peso: 600,
        lunghezza: 45
    },
    
    {
        varieta: "sarda",
        peso: 100,
        lunghezza: 10
    },

    {
        varieta: "emiliana",
        peso: 300,
        lunghezza: 40
    },

    {
        varieta: "valdostana",
        peso: 250,
        lunghezza: 40
    },
]
console.log(zucchina);

var elemento = 0;
    
for(var i = 0; i < zucchina.length; i++){

    elemento += zucchina[i].peso;
}

console.log(elemento);  
