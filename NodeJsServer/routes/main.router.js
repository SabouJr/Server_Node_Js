/*
Imports
*/ 
// Node Js
    const { Router } = require('express');

// Inner 
    const { FrontRouterClass } = require('./front/front.routes')
    const { ApiRouterClass } = require('./api/api.routes')

/*
Configuration
*/ 
// Parent
    const mainRouter = Router();
// Child
    const frontRouter = new FrontRouterClass();
    const apiRouter = new ApiRouterClass();

// Routes
    mainRouter.use( `/`, frontRouter.init() );
    mainRouter.use( `/`, apiRouter.init() );

/*
Export
*/ 
    module.exports = { mainRouter };

//