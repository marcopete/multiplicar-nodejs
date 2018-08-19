const opciones = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Se emmmcarga de listar la tabla culeca', opciones)
    .command('crear', 'Se emmmcarga de crear el archivo culeco', opciones)
    .help()
    .argv;

module.exports = {
    argv
}