const express = require('express');
const path = require('path');


const starServer = (options) => {
    const {port, public_path = 'public'} =  options;
    
    
    const app = express();

    // Construimos la ruta absoluta para el contenido estático

    const publicDirectory = path.join(__dirname, '..',public_path);

    // Para usar midleware, se tiene que utlizar la frase 'use'
    // Servimos contenido estático
    app.use(express.static(publicDirectory)); /// contenido estatico que ponemos disponible



    // Realicemos una peticion get, devolvieon el el proyecto que se encuentra dentro de src/public
    app.get('*', (req, res) => {

        // Construimos el sitio mediante la ubicion donde se encuentra el proyecto a mostrar
        const indexpath = path.resolve(publicDirectory, 'index.html')

        // Realicamos resposne con el sitio web
        res.sendFile(indexpath);
    })

    app.listen(port, () => {
        console.log('Escuchando en el puerto ' + port)
    });
}

module.exports = {
    starServer
}