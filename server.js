'use strict';
/**
 * adding dependencies
 */
const express = require('express');
const server = express();
/**
 * Requiring the error handlers
 */
const errorHandler = require('./error-handlers/500.js');
const notFound = require('./error-handlers/404.js');

/**
 * This function is used to call the home Route
 * @param {request} send request
 * @param {response} send response
 * @returns {response} console massage 
 */
server.get('/', (request, response)=>{
  response.send('welcome to server.js');
});
/**
 * This function is used to call the home Route
 * @param {request} send request
 * @param {response} send response
 * @returns {response} error massage 
 */
server.get('/bad', (request, response)=>{
  throw new Error ('Something went wrong');
});
/**
 * Make use of the error handlers
 */
server.use(errorHandler);
server.use('*', notFound);

/**
 * This function is used to start listening to app on PORT
 * @param {PORT} the port to listen with
 */
function start (PORT){
  server.listen(PORT, ()=>{
    console.log(`listening on ${PORT}`);
  });
}
/**
 * @typedef {exports(app, start} 
 */
module.exports= {
  server : server, 
  start : start,
};