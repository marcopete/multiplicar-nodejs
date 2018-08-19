//requireds
// const fs = require('fs');

//se ejecuta con comando node app listar --limite 5 -b 3

const argv = require('./config/yargs').argv;
const colores = require('colors');

const { crearArchivo, listarTabla } = require('./tablasDeMultiplicar/multiplicar.js');

let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo.green }`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
}

//console.log(argv);

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

//console.log(argv2);

//let parametro = argv[2];
//base es el valor a multiplicar linea 6 valor en duro
//let base = parametro.split('=')[1]

//console.log(base);