const express = require('express');
const beerRouter = require('./beer');
const wineRouter = require('./wine');

const apiRouter = express.Router();

apiRouter.get('/', (req, res, next) => {
    res.status(200).send('The API is working. Requests can be made at /beer and /wine.');
});

apiRouter.use('/beer', beerRouter);
apiRouter.use('/wine', wineRouter);

module.exports = apiRouter;