const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    console.log('======================'.blue);
    console.log(`===== Tabla de ${ base } =====`.blue);
    console.log('======================'.blue);

    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } x ${ i } = ${ base * i }`);
    }
};

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido '${ base }' no es un numero`.red);
            return;
        }


        let data = '';

        for (let i = 1; i <= limite; i++) {

            data += `${ base } x ${ i } = ${ base * i }\n`;

        }

        fs.writeFile(`tablas/tabla-${ base }`, data, (err) => {

            if (err)
                reject(err.red);
            else
                resolve(`tabla-${ base }.txt`);

        });

    });
};

module.exports = {
    crearArchivo,
    listarTabla
};