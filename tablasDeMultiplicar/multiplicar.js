//requireds
const fs = require('fs');
const colores = require('colors');

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(base + ' ' + 'No es un número para la base');
            return;
        }

        if (!Number(limite)) {
            reject(limite + ' ' + 'No es un número para el límite');
            return;
        }

        console.log('=============================='.green);
        console.log(`Tabla del ${ base } con limite ${ limite }`.green);
        console.log('=============================='.green);

        for (let i = 1; i <= limite; i++) {
            console.log(base + '*' + i + '=' + base * i);
        }

        resolve(`Se hizo la wea con base ${ base } y límite ${ limite }`);

    })


}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(base + ' ' + 'No es un número');
            return;
        }

        if (!Number(limite)) {
            reject(limite + ' ' + 'No es un número');
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        fs.writeFile(`tablasDeMultiplicar/laTablaDel${ base }conlimite${ limite }.txt`, data, (err) => {

            if (err)
                reject(err)
            else
                resolve(`laTablaDel${ base }conlimite${ limite }.txt`);

            //console.log(`El arshivooo laTablaDel${ base }.txt se creó`);
        });


    });
}

module.exports = {
    crearArchivo,
    listarTabla
}