// requireds, existen 3 tipos de require
//const fs = require('fs'); los que son propios de node
// const fs = require('express'); se instala y se utiliza (no son nativos de node), creados por la comunidad
// const fs = require('./fs'); de archivos que nosotros creamos en nuestro proyecto
const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Se ha creado el archivo:', colors.green(archivo)))
            .catch(err => console.log(err));
        break;

    default:
        console.log('Comando no reconocido');
}