'use strict';
const express = require('express');
const server = express();

const errorHandler = require('./error-handlers/500.js');
const notFound = require('./error-handlers/404.js');


server.get('/', (request, response)=>{
  response.send('welcome to server.js');
});

server.get('/bad', (request, response)=>{
  throw new Error ('Something went wrong');
});

server.use(errorHandler);
server.use('*', notFound);


function start (PORT){
  server.listen(PORT, ()=>{
    console.log(`listening on ${PORT}`);
  });
}

module.exports= {
  server : server, 
  start : start,
};