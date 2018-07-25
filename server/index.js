
require("babel-core/register");
require("babel-polyfill");

import express from 'express';
import errorHandler from './middlewares/errorHandler';
import index from './routes/index';
import api from './routes/api';

const HTTP_PORT = 7000;

const app = express();

// routing
app.use('/', index);
app.use('/api', api);
app.use(errorHandler);

const logBootMassage = () => {
    const port = server.address().port;
    console.info(`Web server is listening at: localhost:${port}.`);
};

const http = require('http');
const server = http.createServer(app).listen(HTTP_PORT, undefined, logBootMassage);

