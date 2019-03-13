/* 
Imports
*/
const express = require('express');
const frontRouter = express.Router();
//


/* 
Configuration
*/
class FrontRouterClass{

    routes(){
        // Homepage
        frontRouter.get(`/`, (req, res) =>{
            res.render(`index`);
        });

        // Userpage
        frontRouter.get(`/me`, (req, res) =>{
            res.render(`me`);
        });
    }

    init(){
        // Lancer les routes
        this.routes();
        //Renvoyer les router
        return frontRouter;
    }

};
//

/* 
Export
*/
module.exports = { FrontRouterClass };
//