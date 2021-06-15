// // Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.

var bici = [

    {
        nome : 'pinarello',
        peso : 2,
    },

    {
        nome : 'cross',
        peso : 5,
    },

    {
        nome : 'mountain',
        peso : 3,
    }
]

var minimo = bici[0].peso;

for (var i = 0; i < bici.length; i++) {
    

    if (bici[i].peso < minimo) {
        minimo = bici[i].peso;
    }
    
}

console.log(minimo);


// Crea un array di 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

var zucchina = {
    varieta : 'italiana',
    peso : 1,
    lunghezza : 22,
};

var zucchine = [

    zucchina,
    {
        varieta : 'brasiliana',
        peso : 4,
        lunghezza : 34,
    },
    {
        varieta : 'croata',
        peso : 3,
        lunghezza : 12,
    },
    {
        varieta : 'svizzera',
        peso : 6,
        lunghezza : 21,
    },
    {
        varieta : 'gialla',
        peso : 7,
        lunghezza : 14,
    },
    {
        varieta : 'blu',
        peso : 3,
        lunghezza : 16,
    },
    {
        varieta : 'viola',
        peso : 5,
        lunghezza : 13,
    },
    {
        varieta : 'americana',
        peso : 2,
        lunghezza : 22,
    },
    {
        varieta : 'italiana',
        peso : 6,
        lunghezza : 25,
    },
    {
        varieta : 'italiana',
        peso : 9,
        lunghezza : 28,
    }
];

var somma = 0;

for (var i = 0; i < zucchine.length; i++) {
    
    somma += zucchine[i].peso;
    
}

console.log(somma);


// Crea un array di 10 oggetti che rappresentano una zucchina. Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine

var arrayMinore = [];
var arrayMaggiore = [];
var sommaMinore = 0;
var sommaMaggiore = 0;

for (var i = 0; i < zucchine.length; i++) {

    if (zucchine[i].lunghezza > 15) {
        arrayMaggiore.push(zucchine[i]);
        sommaMaggiore += zucchine[i].peso;
    } else {
        arrayMinore.push(zucchine[i]);
        sommaMinore += zucchine[i].peso;
    }
}

console.log(arrayMinore);
console.log(arrayMaggiore);
console.log(sommaMinore);
console.log(sommaMaggiore);