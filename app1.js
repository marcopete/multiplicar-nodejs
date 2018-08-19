//requireds
// const fs = require('fs');

const { crearArchivo } = require('./tablasDeMultiplicar/multiplicar.js');

let base = 15;

//console.log(crearArchivo);

// let data = '';

// for (let i = 1; i <= 10; i++) {
//     //console.log(`${ base } * ${ i } = ${base * i}`);
//     data += `${ base } * ${ i } = ${ base * i }\n`;

//     //console.log(`${base} * ${i} = ${base * i}`);
// }

// fs.writeFile(`tablasDeMultiplicar/laTablaDel${ base }.txt`, data, (err) => {
//     if (err) throw err;
//     console.log(`El arshivooo laTablaDel${ base }.txt se creó`);
// });

crearArchivo(base)
    .then(archivo => console.log(`Archivo creado ${ archivo }`))
    .catch(e => console.log(e));