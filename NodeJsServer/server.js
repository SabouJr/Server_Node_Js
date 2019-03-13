/*
IMPORTS
*/
    // Node Js
    require('dotenv').config(); // Variable d'environnement
    const express = require('express');  // Configuration Server
    const ejs = require('ejs'); // Moteur de template
    const path = require('path'); // Gestion du dossier client

    // Inner
    const { mainRouter } = require('./routes/main.router');

/*
CONFIGURATION
*/
    // Créer le serveur
    const server = express();
    const port = process.env.PORT;

    // Configurer le dossier www
    server.set( 'views', __dirname + '/www');
    server.use( express.static(path.join(__dirname, 'www')) );

    // Configurer le moteur de rendu 
    server.set( 'view engine', 'ejs' );

    // Ajouter le routeur dans le serveur
    server.use(`/`, mainRouter);
//

/*
LANCER LE SERVEUR
*/
    server.listen( port, () => {
        console.log(`Server is listenning on port ${port}`);
    });
//