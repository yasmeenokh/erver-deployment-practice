'use strict';
module.exports = (error , request, response, next)=> {
  response.status(500).json({
    status : 500, 
    massage: error.massage, 
    route : request.path,
  });
};