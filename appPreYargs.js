//requireds
// const fs = require('fs');

const argv = require('yargs').argv;

const { crearArchivo } = require('./tablasDeMultiplicar/multiplicar.js');

//let base = 5;

//console.log(crearArchivo);

// let data = '';
//
// for (let i = 1; i <= 10; i++) {
//     //console.log(`${ base } * ${ i } = ${base * i}`);
//     data += `${ base } * ${ i } = ${ base * i }\n`;

//     //console.log(`${base} * ${i} = ${base * i}`);
// }

// fs.writeFile(`tablasDeMultiplicar/laTablaDel${ base }.txt`, data, (err) => {
//     if (err) throw err;
//     console.log(`El arshivooo laTablaDel${ base }.txt se creó`);
// });

// console.log(process.argv);
let argv2 = process.argv;

console.log(argv);
console.log(argv2);

//let parametro = argv[2];
//base es el valor a multiplicar linea 6 valor en duro
//let base = parametro.split('=')[1]

//console.log(base);

//crearArchivo(base)
//    .then(archivo => console.log(`Archivo creado ${ archivo }`))
//    .catch(e => console.log(e));