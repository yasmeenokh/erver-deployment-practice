'use strict';
/**
 * @typedef {exports(request, response)} 
 */
module.exports= (request, response)=>{
  response.status(404).json({
    status : 404, 
    massage: 'This page can not be found',
  });
};