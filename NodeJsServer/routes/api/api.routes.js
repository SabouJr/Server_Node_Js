/* 
Imports
*/
const express = require('express');
const apiRouter = express.Router();
//


/* 
Configuration
*/
class ApiRouterClass{

    routes(){
        //  API Homepage
        apiRouter.get(`/`, (req, res) =>{
            res.json( { msg: 'Hello API', data: [ 'Nodejs', 'API' ] } );
        });
    }

    init(){
        // Lancer les routes
        this.routes();
        //Renvoyer les router
        return apiRouter;
    }

};
//

/* 
Export
*/
module.exports = { ApiRouterClass };
//